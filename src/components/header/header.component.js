import React from 'react';
import {Link} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/card.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import CartIcon from '../card-icon/card-icon.component';
import Cart from '../cart/cart.component';

import {connect} from 'react-redux';

import {Auth} from './../../firebase/firebase.utils';

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import {auth} from './../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, OptionsContainer,
    OptionLink
} from './header.styles';

function Header({currentUser, hidden, ...rest}) {
    return(
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {currentUser ?
                    <OptionLink as='div' onClick={() =>
                        auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                :
                    <OptionLink to="/signin" >SIGN IN</OptionLink>
                }
                    <CartIcon></CartIcon>
            </OptionsContainer>
            {hidden ?
                null
            :
                <Cart></Cart>
            }
        </HeaderContainer>
    );
}

// state is actualy yroot reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);