import {GET_PRODUCTS, DELETE_PRODUCT_BY_ID, POST_PRODUCT, GET_PRODUCT_BY_ID, PUT_PRODUCT_BY_ID} from './types';
import {baseUrl} from '../config/config';

import axios from 'axios';

export const getProducts = () => async dispatch =>{
    const url = baseUrl;
    const response = await axios.get(url);
    dispatch({
        type: GET_PRODUCTS,
        payload: response.data
    })
}

export const deleteProductById = id => async dispatch =>{
    const url = `${baseUrl}/${id}`;
    await axios.delete(url);

    dispatch({
        type: DELETE_PRODUCT_BY_ID,
        payload: id
    })
}

export const postProduct = product => async dispatch=>{
    const url = baseUrl;
    const response = await axios.post(url,product);

    dispatch({
        type: POST_PRODUCT,
        payload: response.data
    })
}

export const getProductById = id => async dispatch =>{
    const url = `${baseUrl}/${id}`;
    const response = await axios.get(url);

    dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: response.data
    })
}

export const putProductById = (id, product) => async dispatch =>{
    const url = `${baseUrl}/${id}`;
    const response = await axios.put(url, product);

    dispatch({
        type: PUT_PRODUCT_BY_ID,
        payload: response.data
    })

}