import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


class Navbar extends Component {
    render() {
        return (
            
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <div className="container">
                    <div className="col-xl-4">
                    <ul className="navbar-nav align-items-center mt-0">
                        <li className="nav-item">
                            <Link to="/">
                                <i style={{color:"gray", fontSize:"30px"}} className="fa fa-home" />
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="navbar-nav align-items-center mr-8">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="navbar-nav align-items-right ml-5">
                        <li className="nav-item ml-5">
                            <Link to="/cart" >
                                <ButtonContainer>
                                    <span className="mr-2">
                                    <i className="fa fa-cart- fa- fa-shopping-cart " /> my cart
                                    </span>
                                </ButtonContainer>
                            </Link>
                        </li>
                    </ul>
                    </div>  
               </div>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:black;
.nav-link{
    font-size:1.3rem;
    text-transform: capitalize !important;
}
`


export default Navbar;