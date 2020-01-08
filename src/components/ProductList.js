import React, { Component } from 'react';
import Product from './Product';
// import {StoreProduct} from '../data';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
    // state={
    //     products:StoreProduct
    // }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <h1 className="text-capitalize font-weight-bold" style={{textAlign:"center"}}>My Store
                            </h1>
                        <div className="row mx-4">
                           <ProductConsumer >
                                {value=>{
                                    return value.products.map(product => {
                                        return <Product key={product.id} products={product} />; //Kurang paham
                                    })
                                }}
                           </ProductConsumer>
                        </div>
                    </div>
                    {/* <Product /> */}
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;