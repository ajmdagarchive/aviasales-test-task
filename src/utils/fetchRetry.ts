export async function fetchRetry(
    url: string,
    options = {},
    retryParams = { retryCount: 3, delayMs: 300 },
) {
    const delay = () =>
        new Promise((resolve) => setTimeout(resolve, retryParams.delayMs))
    let lastException = null

    for (let i = 0; i <= retryParams.retryCount; i++) {
        if (i !== 0) {
            await delay()
        }

        try {
            const response = await fetch(url, options)
            const responseStatus = response.status
            if (responseStatus === 200) {
                return response
            } else {
                throw new Error('Ошибка при загрузке данных')
            }
        } catch (error) {
            lastException = `Не удалось загрузить данные | ${error.message}`
        }
    }

    throw lastException
}
