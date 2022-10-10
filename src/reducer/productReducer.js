const initialState = {
    products: [],
}


export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {...state,products:action.payload}
        case "LIST_PRODUCTS":
            return {...state,products:action.payload}
        case "DELETE_PRODUCT":
            return {...state,products:state.products.filter(product =>product._id !== action.payload )}
        case "GET_PRODUCT":
            return {products:action.payload}
        case "VIEW_PRODUCT":{
            return {...state,products:action.payload}
        }
        default:
            return state;
    }
}