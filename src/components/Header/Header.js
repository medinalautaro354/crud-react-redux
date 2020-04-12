import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex'>
            <h1>
                <Link to={'/'} className='text-light'>
                CRUD productos - React, Redux, Rest Api & Axios
                </Link>
            </h1>
            <Link to={'/productos/nuevo'} className='btn btn-danger create-product'>
            Agregar Producto &#43;
            </Link>
        </nav>
    )
}

export default Header;