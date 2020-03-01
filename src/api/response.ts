import { TablePaginationConfig } from 'antd/lib/table'

class ApiResponse<T> {
    error?: object
    data?: T
}

class PageResponse<T> {
    current_page?: number
    page_size?: number
    total_pages?: number
    total_elements?: number
    elements?: T[]

    /**
     * Updates the table pagination config object for antd components according the the response.
     *
     * @param {PageResponse<any>} pageResponse the page response object for the updating process.
     * @param {TablePaginationConfig} pagination the pagination object for antd components.
     * @returns {void}
     */
    static updatePagination<E>(
        pageResponse: PageResponse<E>,
        pagination: TablePaginationConfig
    ): void {
        if (pageResponse.current_page) {
            pagination.current = pageResponse.current_page - 1
        }
        pagination.pageSize = pageResponse.page_size
        pagination.total = pageResponse.total_elements
    }

    static empty<E>(): PageResponse<E> {
        return {
            current_page: 1,
            page_size: 50,
            total_pages: 1,
            total_elements: 0,
            elements: [],
        }
    }
}

export { ApiResponse, PageResponse }
