import { compareProperty } from '../../utils/comparator'
import common from '../common'
import { RequestPage } from '../request'
import { ApiResponse, PageResponse } from '../response'
import User from './user'

const dataSource: User[] = [
    {
        id: 1,
        name: '胡彦斌',
        rating: 1500,
        lastContestId: 42,
        lastContest: '内部测试赛（2月29日）',
    },
    {
        id: 2,
        name: '胡彦祖',
        rating: 1480,
        lastContestId: 42,
        lastContest: '内部测试赛（2月29日）',
    },
]
for (let i = 0; i < 100; i++) {
    dataSource.push({
        id: i + 3,
        name: `test ${i}`,
        rating: Math.trunc(Math.random() * 2500 + 1000),
        lastContestId: 42,
        lastContest: `内部测试赛（2月${Math.trunc(Math.random() * 29 + 1)}日）`,
    })
}

dataSource.sort((first, second) => {
    return compareProperty(second.rating, first.rating)
})

class UserApi {
    /**
     * Gets users according to the request page.
     *
     * @param {RequestPage} page the request page entity for API query.
     * @returns {ApiResponse<PageResponse<User>>} the API results from backend side.
     */
    public getUsers = async (
        page: RequestPage
    ): Promise<ApiResponse<PageResponse<User>>> => {
        return fetch(`${common.baseUrl}/api/v1/users/`)
            .then(response => {
                if (!response.ok) {
                    console.error(
                        'error occurs when fetching response:',
                        response
                    )
                    Promise.reject(this)
                }
                return response.json()
            })
            .then(json => {
                if (json) {
                    return Object.assign(
                        new ApiResponse<PageResponse<User>>(),
                        json
                    )
                } else {
                    return {
                        data: PageResponse.empty(),
                    }
                }
            })
            .then(result => {
                result.data?.elements?.forEach((user: User) => {
                    if (!user.lastContestId) {
                        user.lastContestId = -1
                    }
                    if (!user.lastContest) {
                        user.lastContest = ''
                    }
                })
                return result
            })
            .catch(e => {
                console.error('error occurs when fetching response:', e)
            })
    }
}

export default new UserApi()
