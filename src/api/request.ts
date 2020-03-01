import { PaginationConfig } from 'antd/lib/pagination'

class RequestPage {
    page: number = 1
    size: number = 50

    /**
     * Creates a request page object according to antd pagination object.
     *
     * @param {PaginationConfig} pagination the pagination object for antd components.
     * @returns {RequestPage} the corresponding request page object.
     */
    static fromPagination(pagination: PaginationConfig): RequestPage {
        const requestPage: RequestPage = new RequestPage()
        if (pagination.current) {
            requestPage.page = pagination.current
        }
        if (pagination.pageSize) {
            requestPage.size = pagination.pageSize
        }
        return requestPage
    }
}

export { RequestPage }
