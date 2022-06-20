import { POKEMON_TYPE_COLORS } from "../constants/pokemonType";

export const getColorByPokemonType = (type) =>
    POKEMON_TYPE_COLORS[type.toLowerCase()]
