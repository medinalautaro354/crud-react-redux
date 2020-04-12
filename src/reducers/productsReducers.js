import { GET_PRODUCTS, DELETE_PRODUCT_BY_ID, POST_PRODUCT, GET_PRODUCT_BY_ID, PUT_PRODUCT_BY_ID} from '../actions/types';

const initialState ={
    products:[]
}

export default function(state =initialState, action){
    switch(action.type){
        case GET_PRODUCTS:{
            return{
                ...state,
                products: action.payload
            }
        }

        case DELETE_PRODUCT_BY_ID:{
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        }

        case POST_PRODUCT:{
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        }

        case GET_PRODUCT_BY_ID:{
            return{
                ...state,
                product: action.payload
            }
        }

        case PUT_PRODUCT_BY_ID:{
            return{
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? (product = action.payload) : product)
            }
        }
        
        default:
            return state;
    }
}