import React from 'react';
import {Link} from 'react-router-dom';

import CartIcon from '../card-icon/card-icon.component';
import Cart from '../cart/cart.component';

import {connect} from 'react-redux';

import {Auth} from './../../firebase/firebase.utils';

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import {auth} from './../../firebase/firebase.utils';

function Header({currentUser, hidden, ...rest}) {
    console.log(hidden);
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {currentUser ?
                    <div className="option" onClick={() =>
                        auth.signOut()}>
                        SIGN OUT
                    </div>
                :
                    <Link to="/signin" className="option">SIGN IN</Link>
                }
                    <CartIcon></CartIcon>
            </div>
            {hidden ?
                null
            :
                <Cart></Cart>
            }
        </div>
    );
}

// state is actualy yroot reducer
function mapStateToProps({user: {currentUser}, cart : {hidden}}) {
    return {
        currentUser,
        hidden,
    };
};

export default connect(mapStateToProps)(Header);