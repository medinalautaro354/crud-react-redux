import React, { Component } from 'react'

import {connect} from 'react-redux';
import {getProductById, putProductById} from '../../actions/productsActions';

class UpdateProduct extends Component{
    state ={
        name: '',
        price: '',
        error:false
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getProductById(id);
    };

    componentWillReceiveProps(nextProps, nextState){
        const {name, price} = nextProps.product;
        this.setState({
            name, 
            price
        });
    }
    name = (e) =>{
        this.setState({name: e.target.value});
    }

    price = (e) =>{
        this.setState({price: e.target.value})
    }

    updateProductById = (e) =>{
        e.preventDefault();
        const {name, price} = this.state;
        const id = this.props.match.params.id;

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

        this.props.putProductById(id, product);
        this.props.history.push('/');
    }

  render() {
    const {name, price, error} = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Editar Producto</h2>
              <form onSubmit={this.updateProductById}>
                <div className="form-group">
                  <label>Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    onChange={this.name}
                    defaultValue = {name}
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                    onChange={this.price}
                    defaultValue = {price}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Guardar cambios
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

const mapStateToProps = state =>({
    product: state.products.product
})

export default connect(mapStateToProps, {getProductById, putProductById})(UpdateProduct);