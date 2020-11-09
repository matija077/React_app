import React from 'react';
import combineObject from '../../redux/store'
const { store } = combineObject;

import {render as reactRender, fireEvent, screen} from '@testing-library/react';
import { shallow } from 'enzyme';

import CartIcon from './card-icon.component';


var mockToggleCartHidden = function() {
    console.log("hidden");
}
var mockItemCount= 0;
var cardIconComponent = <CartIcon
    store={store}
    toggleCartHidden={mockToggleCartHidden}
    itemCount={mockItemCount}
/>;

var shallowWrapper = shallow(cardIconComponent);
var cardIconComponent = reactRender(cardIconComponent);

describe("test cardIcon component", function describe() {
    it("snapshot card icon enzyme", function snapshot(){
        expect.assertions(1);
        expect(shallowWrapper).toMatchSnapshot();
    })

    it("card icon enzyme", function enzyme(){
        //const cartIcon = shallowWrapper.find("[className='cart-icon']");
        //expect(cartIcon.hasClass('cart-icon')).toEqual('cart-icon');
        //const shoppingIcon = wrapper.find("[className='shopping-icon']");
        //expect(shoppingIcon.hasClass('shopping-icon')).toEqual('shopping-icon');
        //const itemCount = wrapper.find("[className='item-count']");
        //expect(itemCount.hasClass('item-count')).toEqual('item-count');
    })

    it("icon cart react DOM", function react(){
        expect.assertions(0);
    })
})