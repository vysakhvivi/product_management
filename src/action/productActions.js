import { ActionTypes } from '../constants/actiontypes'

export const addProduct = (products) =>{
    return {
        type:ActionTypes.ADD_PRODUCTS,
        payload:products
        
    }
}

export const editProduct = (products) =>{
    return {
        type:ActionTypes.EDIT_PRODUCTS,
        payload:products
    }
}

export const deleteProduct = (products) =>{
    return {
        type:ActionTypes.DELETE_PRODUCT,
        payload:products
    }
}

export const viewProduct = (product) =>{
    return {
        type:ActionTypes.VIEW_PRODUCT,
        payload:product
    }
}

export const listProducts = (products) =>{
    return {
        type:ActionTypes.LIST_PRODUCTS,
        payload:products
    }
}

