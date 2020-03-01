import { Table } from 'antd'
import { PaginationConfig } from 'antd/lib/pagination'
import { TablePaginationConfig } from 'antd/lib/table'
import React, { Component } from 'react'
import { RequestPage } from '../../api/request'
import { ApiResponse, PageResponse } from '../../api/response'
import User from '../../api/users/user'
import userApi from '../../api/users/user-api'
import './Ratings.css'

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 60,
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        width: 60,
    },
    {
        title: '最后比赛',
        dataIndex: 'lastContest',
        key: 'lastContest',
        width: 60,
    },
]

class State {
    public response: ApiResponse<PageResponse<User>> = {
        data: PageResponse.empty(),
    }
    public pagination: TablePaginationConfig = { pageSize: 10 }
    public loading = true
}

// TODO(ruinshe): need pipes for the contest link and rating colors. /
export default class RatingsView extends Component {
    public state: State = new State()

    componentDidMount() {
        this.fetch(RequestPage.fromPagination(this.state.pagination))
    }

    fetch = (page: RequestPage = new RequestPage()) => {
        this.setState({ loading: true })
        const pagination = { ...this.state.pagination }
        userApi
            .getUsers(page)
            .then(response => {
                if (!response || !response.data) {
                    // TODO(ruinshe): show error here.
                    console.error('error occurs then get users:', response)
                    return
                }
                PageResponse.updatePagination(response.data, pagination)
                this.setState({
                    response: response,
                    pagination: pagination,
                    loading: false,
                })
            })
            .catch(e => {
                console.error('error occurs then get users:', e)
            })
    }

    onChanged = (pagination: PaginationConfig) => {
        const pager = { ...this.state.pagination }
        pager.current = pagination.current
        pager.pageSize = pagination.pageSize
        this.setState({ pagination: pager })
        this.fetch(RequestPage.fromPagination(pager))
    }

    render() {
        return (
            <Table
                columns={columns}
                rowKey={user => user.id.toString()}
                dataSource={this.state.response.data?.elements}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.onChanged}
            />
        )
    }
}
