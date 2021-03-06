import uuid from 'react-uuid';

import { GET_ITEM, GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, GET_ITEMS_ARTIST_ID, GET_ITEMS_PUBLISHER_ID } from '../actions/types'

const initialState = {
    items: [
        { id: uuid(), title: 'Bla', artist: 'you know', year: '2005', description: 'you know what'},
        { id: uuid(), title: 'La joconde', artist: 'Michael Angelo', artist_id: '2', publisher: 'Some king?', year: '1813', description: 'The best painting apparently', image_url: 'https://uploads7.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg'},
        { id: uuid(), title: 'That makes sense', artist: 'Jep', artist_id: '2'},
        { id: uuid(), title: 'Trowing girl', artist: 'Banski', year: '2001', description: 'Girl throwing', image_url: 'https://images-na.ssl-images-amazon.com/images/I/51Q4fwAoFgL._AC_SL1423_.jpg'},
        { id: uuid(), title: 'Hmm, just a title?'},
        { id: uuid(), title: 'Jep, just a title!'},
    ]
}

 const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return{
                ...state
            }
        case GET_ITEM:
            const singleItem = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                singleItem: singleItem
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return  {
                ...state,
                items: [action.payload, ...state.items]
            }
        case EDIT_ITEM:
            var filteredItems = state.items.filter(item => item.id !== action.payload)
            return {
                ...state,
                items: [action.payload, ...filteredItems]
            }
        case GET_ITEMS_ARTIST_ID:
            var filteredItems = state.items.filter(item => item.artist_id === action.payload);
            return {
                ...state,
                artist_items: [...filteredItems]
            }
        case GET_ITEMS_PUBLISHER_ID:
            var filteredItems = state.items.filter(item => item.publisher_id === action.payload)
            return {
                ...state,
                publisher_items: [...filteredItems]
            }
        default:
            return state;
    }
}

export default itemReducer;