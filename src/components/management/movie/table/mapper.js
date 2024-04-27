export const mapper = (data) => {
    debugger

    if (!data) return []

    const mapData = data.map((item) => {
        return {
            ...item,
            genre: item.genre.join(', ')
        }
    })

    return mapData
}
