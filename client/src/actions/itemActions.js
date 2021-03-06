import { GET_ITEM, GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, GET_ITEMS_ARTIST_ID, GET_ITEMS_PUBLISHER_ID } from './types'

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const getItemsWithArtistID = (artist_id) => {
    return {
        type: GET_ITEMS_ARTIST_ID,
        payload: artist_id
    }
}

export const getItemsWithPublisherID = (publisher_id) => {
    return {
        type: GET_ITEMS_PUBLISHER_ID,
        payload: publisher_id
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const editItem = (item) => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}

export const getItem = (id) => {
    return {
        type: GET_ITEM,
        payload: id
    }
}