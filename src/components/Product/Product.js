import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {deleteProductById} from '../../actions/productsActions';

const Product = props =>{
    const {id, name, price} = props.product;
    const deleteProductById = () =>{
        props.deleteProductById(id);
    }
    return(
        <li className='list-group-item'>
            <div className='row justify-content-between align-item-center'>
                <div className='col-md-8 d-flex justify-content-between align-item-center'>
                    <p className='text-dark m-0'>{name}</p>
                    <span className='badge badge-warning text-dark'>${price}</span>
                </div>
                <div className='col-md-4 d-flex justify-content-end actions'>
                    <Link to={`/productos/editar/${id}`} className='btn btn-warning mr-2'>Editar</Link>
                    <button onClick={deleteProductById} type='button' className='btn btn-danger'>Eliminar</button>
                </div>
            </div>
        </li>
        )
}

export default connect(null, {deleteProductById})(Product);