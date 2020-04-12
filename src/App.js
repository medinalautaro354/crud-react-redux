import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import NewProduct from './components/NewProduct/NewProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


import {Provider} from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/productos/nuevo' component={NewProduct}/>
            <Route exact path='/productos/editar/:id' component={UpdateProduct} />
          </Switch>
        </div>
      </React.Fragment>

    </BrowserRouter>

    </Provider>
  );
}

export default App;
