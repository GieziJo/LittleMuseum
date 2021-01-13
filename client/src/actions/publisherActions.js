import { GET_PUBLISHER, GET_PUBLISHERS, ADD_PUBLISHER, DELETE_PUBLISHER, EDIT_PUBLISHER } from './types'

export const getPublishers = () => {
    return {
        type: GET_PUBLISHERS
    }
}

export const deletePublisher = (id) => {
    return {
        type: DELETE_PUBLISHER,
        payload: id
    }
}

export const addPublisher = (publisher) => {
    return {
        type: ADD_PUBLISHER,
        payload: publisher
    }
}
export const editPublisher = (publisher) => {
    return {
        type: EDIT_PUBLISHER,
        payload: publisher
    }
}

export const getPublisher = (id) => {
    return {
        type: GET_PUBLISHER,
        payload: id
    }
}