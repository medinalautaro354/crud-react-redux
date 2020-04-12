import React, { Component } from "react";

import {connect} from 'react-redux';
import {postProduct} from '../../actions/productsActions';

class NewProduct extends Component {

    state ={
        name: '',
        price: '',
        error:false
    }

    name = (e) =>{
        this.setState({name: e.target.value});
    }

    price = (e) =>{
        this.setState({price: e.target.value})
    }

    createProduct = (e) =>{
        e.preventDefault();

        const {name, price} = this.state;

        if(name === '' || price === ''){
            this.setState({
                error:true
            });
            return;
        }else{
            this.setState({
                error:false
            });

        }

        const product = {
            name,
            price
        }

        this.props.postProduct(product);

        this.props.history.push('/');
    }

  render() {
    const {error} = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.createProduct}>
                <div className="form-group">
                  <label>Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    onChange={this.name}
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                    onChange={this.price}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </form>
              { error ? 
                <div className='font-weight-bold alert alert-danger text-center mt-4'>
                Todos los campos son obligatorios
              </div>
              : ''
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {postProduct})(NewProduct);
