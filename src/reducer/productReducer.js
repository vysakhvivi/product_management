import  {ActionType} from '../constants/actionTypes'

const initialState={
    products:[{
        id:1,
        title:"dipesh",
        category:"programmer"
    }]
}

export const productReducer = (state,{type,payload}) =>{
switch(type){
    case ActionType.SET_PRODUCTS:
        return state;

        default:
            return state;
}
}