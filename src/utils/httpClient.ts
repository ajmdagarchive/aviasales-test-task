import { fetchRetry } from './fetchRetry'
import { GetTicketsResponse } from './types'

class HttpClient {
    constructor(private apiRoot: string) { }

    fetch = async (url: string, options = {}) =>
        await fetchRetry(`${this.apiRoot}${url}`, options, {
            retryCount: 3,
            delayMs: 0,
        })

    fetchJSON = async (url: string, options = {}) => {
        const response = await this.fetch(url, options)
        return await response.json()
    }

    async getSearchId(): Promise<{ searchId: string }> {
        return this.fetchJSON('/search')
    }

    async getTickets(searchId: string): Promise<GetTicketsResponse> {
        return this.fetchJSON(`/tickets?searchId=${searchId}`)
    }
}

export const apiClient = new HttpClient(
    process.env.API_ROOT || 'https://front-test.beta.aviasales.ru',
)
