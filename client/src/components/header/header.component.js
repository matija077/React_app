import React from 'react';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/card.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../card-icon/card-icon.component';
import Cart from '../cart/cart.component';

import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import {auth} from './../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, OptionsContainer,
    OptionLink
} from './header.styles';

import CurrentUser from '../../context/current-user/current-user.context';
import CartContext from '../../context/cart/cart.context';

function Header({currentUser, ...rest}) {
    const currentUser2 = React.useContext(CurrentUser);
    const { signOutStart } = rest;
    var [hidden, setHidden] = React.useState(true);
    var toggleCartHidden = function() {
        setHidden(!hidden);
    }

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
                <OptionLink to="/checkout">
                    CHECKOUT
                </OptionLink>
                {currentUser ?
                    <OptionLink as='div' onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                :
                    <OptionLink to="/signin" >SIGN IN</OptionLink>
                }
                <CartContext.Provider value={{
                    hidden,
                    toggleCartHidden
                }}>
                    <CartIcon></CartIcon>
                </CartContext.Provider>
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

const mapDispatchToProps = (dispatch) => {
    return {
        signOutStart: () => dispatch(signOutStart())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);