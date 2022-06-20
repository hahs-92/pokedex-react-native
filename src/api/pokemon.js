const URl_BASE = 'https://pokeapi.co/api/v2/'

export const getPokemons = async (limit=20, offset=0) => {
    try {
        const url = `${URl_BASE}/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}
