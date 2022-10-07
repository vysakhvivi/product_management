export const addProduct = (products) =>{
    return {
        type:"ADD_PRODUCTS",
        payload:products
        
    }
}

export const editProduct = (products) =>{
    return {
        type:"EDIT_PRODUCTS",
        payload:products
    }
}

export const deleteProduct = (products) =>{
    return {
        type:"DELETE_PRODUCT",
        payload:products
    }
}

export const viewProduct = (product) =>{
    return {
        type:"VIEW_PRODUCT",
        payload:product
    }
}

export const listProducts = (products) =>{
    return {
        type:"LIST_PRODUCTS",
        payload:products
    }
}


export const getProduct = (products) =>{
   return{
            type:"GET_PRODUCT",
            payload:products
        
         

    }
}

