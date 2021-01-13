import uuid from 'react-uuid';

import { GET_ARTISTS, GET_ARTIST, ADD_ARTIST, EDIT_ARTIST, DELETE_ARTIST } from '../actions/types'

const initialState = {
    artists: [
        { id: uuid(), name: 'Bla', description: 'you know'},
        { id: '2', name: 'Michael Angelo', description: 'Some rando'},
        { id: uuid(), name: 'That makes sense', description: 'Jep'},
        { id: uuid(), name: 'Banski', description: 'Some other rando'},
        { id: uuid(), name: 'Hmm, just a name?'},
        { id: uuid(), name: 'Jep, just a name!'},
    ]
}

 const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTISTS:
            return{
                ...state
            }
        case GET_ARTIST:
            const singleArtist = state.artists.find(artist => artist.id === action.payload);
            return {
                ...state,
                singleArtist: singleArtist
            }
        case DELETE_ARTIST:
            return {
                ...state,
                artists: state.artists.filter(artist => artist.id !== action.payload)
            };
        case ADD_ARTIST:
            return  {
                ...state,
                artists: [action.payload, ...state.artists]
            }
        case EDIT_ARTIST:
            var filteredArtist = state.artists.filter(artist => artist.id !== action.payload.id)
            return {
                ...state,
                artists: [action.payload, ...filteredArtist]
            }
        default:
            return state;
    }
}

export default artistReducer;