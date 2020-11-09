import React from 'react';
import combineObject from '../../redux/store'
const { store } = combineObject;

import {render as reactRender, fireEvent, screen} from '@testing-library/react'
import { shallow } from 'enzyme';

import { clearCart } from '../../redux/cart/cart.actions';

import ClearCart from './clearCart.component';

describe('test clearCart component', function describe() {
    it("snapshot clearCart enzyme", function snapshotClearCart() {
        expect.assertions(1);
        expect(shallow(<ClearCart store={store} />)).toMatchSnapshot();
    });

    it("clearCart react", function react() {
        expect.assertions(2);
        const classNameMock = "header-block";

        const clearCartComponent = reactRender(<ClearCart
            store={store}
            clearCart={clearCart}
            className={classNameMock}
        >
        </ClearCart>);

        expect(clearCartComponent.container.firstChild.classList.
            contains(classNameMock)).toBe(true);
        expect(screen.getByText("\u274C")).toBeInTheDocument();
    })
});