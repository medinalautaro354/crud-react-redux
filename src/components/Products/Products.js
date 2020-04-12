import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProducts} from '../../actions/productsActions';
import Product from '../Product/Product';

class Products extends Component{

    componentWillMount(){
        this.props.getProducts();
    }

    render(){
        const{products} = this.props;
        console.log(products);
        return(
            <React.Fragment>
                <h2 className='text-center my-5'>Productos</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <ul>
                            {products.map(product =>(
                                <Product key={product.id} product={product}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state =>({
    products: state.products.products
})
export default connect(mapStateToProps, {getProducts})(Products);