import { ActionTypes } from '../constants/actiontypes'

const initialState = {
    products: []
}


export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            return {...state,products:action.payload}
        case ActionTypes.LIST_PRODUCTS:
            return {...state,products:action.payload}
        case ActionTypes.DELETE_PRODUCT:
            return {...state,products:state.products.filter(product =>product._id !== action.payload )}
        default:
            return state;
    }
}