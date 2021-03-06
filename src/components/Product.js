import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
// import {StoreProduct} from '../data';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.products; 
        
       
        return (
            <ProductWrapper className="col-6 col-sm-6 col-md-4 col-lg-3 my-3" >
                {/* <div className="card" style={{backgroundImage:"url("+require(${img})+")"}}> */}
                <div className="card" >
                <ProductConsumer>
                    {(value) => (
                    <div className="img-container" onClick={()=>value.handleDetail(id)}>
                        <Link to="/details">
                            <img  src={img} alt="product" className="card-img-top" title={title}/>
                        </Link>
                        <button className="cart-btn" disabled={inCart? true: false} onClick={()=>{
                            value.addToCart(id);
                            value.openModal(id);
                        
                        }}>
                            {
                                inCart?(<p className="text-capitalize mb-0" disabled>in Cart</p>) : (<i className="fa fa-cart-plus"></i>)
                                
                            }
                        </button>
                    </div> )}  
                </ProductConsumer>
                <div className="card-footer center">
                            <h6>{title}</h6>
                            <p><b>Rp. {price}</b></p>
                 </div>
            </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    products:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}


const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear;
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition: all 1s linear;
}

&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container {
        position: relative;
        overflow : hidden;
}
.card-img-top{
        transition: all 1s linear;
}

.img-container:hover .card-img-top {
    transform: scale(1.1);
}

.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding:3x 2px;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:2px;
    transform:translate(100%, 100%);
    transition: all 1s linear;
}

.img-container:hover .cart-btn{
    transform: translate(0, 0);
}

.cart-btn:hover{
    color: var(--mainBlue);
    cursor:pointer;
}
`;

export default Product;