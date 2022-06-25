const URl_BASE = 'https://pokeapi.co/api/v2/'

export const getPokemons = async (endPoint) => {
    try {
        const url = `${URl_BASE}/pokemon?limit=20&offset=0}`
        const response = await fetch(endPoint || url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export const getPokemonDetail = async (url) => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return {
            id:result.id,
            name:result.name,
            type:result.types[0].type.name,
            order:result.order,
            image:result.sprites.other['official-artwork'].front_default
        }
    } catch (error) {
        throw error
    }
}
