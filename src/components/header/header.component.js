import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {Auth} from './../../firebase/firebase.utils';

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import {auth} from './../../firebase/firebase.utils';

function Header({user, ...rest}) {
    console.log(user);
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
                {user ?
                    <div className="option" onClick={() =>
                        auth.signOut()}>
                        SIGN OUT
                    </div>
                :
                    <Link to="/signin" className="option">SIGN IN</Link>
                }
            </div>
        </div>
    );
}

// state is actualy yroot reducer
function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser,
    };
};

export default connect(mapStateToProps)(Header);