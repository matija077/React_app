import React from 'react';
import combineObject from '../../redux/store'
const { store } = combineObject;

import {render as reactRender, fireEvent, screen} from '@testing-library/react';
import { shallow } from 'enzyme';

import CartIcon from './card-icon.component';


var mockToggleCartHidden, mockItemCount,
    cardIconComponent, shallowWrapper,
    cardIconComponent;

beforeEach(function beforeEachFunction() {
    mockToggleCartHidden = function() {
        console.log("hidden");
    }
    mockItemCount = 0;
    cardIconComponent = <CartIcon
        store={store}
        toggleCartHidden={mockToggleCartHidden}
        itemCount={mockItemCount}
    />;

    shallowWrapper = shallow(cardIconComponent);
    cardIconComponent = reactRender(cardIconComponent);

});

describe("test cardIcon component", function describe() {
    it("snapshot card icon enzyme", function snapshot(){
        expect.assertions(1);
        expect(shallowWrapper).toMatchSnapshot();
    })

    it("card icon enzyme", function enzyme(){
        expect.assertions(0);
        //const cartIcon = shallowWrapper.find("className: cart-icon");
        //expect(cartIcon.hasClass('cart-icon')).toEqual('cart-icon');
        //const shoppingIcon = wrapper.find("[className='shopping-icon']");
        //expect(shoppingIcon.hasClass('shopping-icon')).toEqual('shopping-icon');
        //const itemCount = wrapper.find("[className='item-count']");
        //expect(itemCount.hasClass('item-count')).toEqual('item-count');
        /*console.log(shallowWrapper.props().toggleCartHidden);
        expect(shallowWrapper.props().itemCount).toBe(0);
        console.log(shallowWrapper.props().itemCount);*/
    })

    it("icon cart react DOM", function react(){
        expect.assertions(0);
    })
})