export const fetcher = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Ошибка fetching ${url}: ${response.status}`)
    }
    return await response.json()
}