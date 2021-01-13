import { GET_ARTIST, GET_ARTISTS, ADD_ARTIST, DELETE_ARTIST, EDIT_ARTIST } from './types'

export const getArtists = () => {
    return {
        type: GET_ARTISTS
    }
}

export const deleteArtist = (id) => {
    return {
        type: DELETE_ARTIST,
        payload: id
    }
}

export const addArtist = (artist) => {
    return {
        type: ADD_ARTIST,
        payload: artist
    }
}
export const editArtist = (artist) => {
    return {
        type: EDIT_ARTIST,
        payload: artist
    }
}

export const getArtist = (id) => {
    return {
        type: GET_ARTIST,
        payload: id
    }
}