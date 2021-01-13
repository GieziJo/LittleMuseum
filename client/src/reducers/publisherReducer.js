import uuid from 'react-uuid';

import { GET_PUBLISHERS, GET_PUBLISHER, ADD_PUBLISHER, EDIT_PUBLISHER, DELETE_PUBLISHER } from '../actions/types'

const initialState = {
    publishers: [
        { id: uuid(), name: 'Looooo', description: 'you know'},
        { id: uuid(), name: 'Hoi', description: 'Some rando'},
        { id: uuid(), name: 'Äuä?', description: 'Jep'},
        { id: uuid(), name: 'Banski', description: 'Some other rando'},
        { id: uuid(), name: 'Hmm, just a name?'},
        { id: uuid(), name: 'Jep, just a name!'},
    ]
}

 const publisherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PUBLISHERS:
            return{
                ...state
            }
        case GET_PUBLISHER:
            const singlePublisher = state.publishers.find(publisher => publisher.id === action.payload);
            return {
                ...state,
                singlePublisher: singlePublisher
            }
        case DELETE_PUBLISHER:
            return {
                ...state,
                publishers: state.publishers.filter(publisher => publisher.id !== action.payload)
            };
        case ADD_PUBLISHER:
            return  {
                ...state,
                publishers: [action.payload, ...state.publishers]
            }
        case EDIT_PUBLISHER:
            var filteredPublisher = state.publishers.filter(publisher => publisher.id !== action.payload.id)
            return {
                ...state,
                publishers: [action.payload, ...filteredPublisher]
            }
        default:
            return state;
    }
}

export default publisherReducer;