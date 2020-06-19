import React from 'react';

import SHOP_DATA from './collections';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>SHOP DATA</div>
        );
    }
}

export default Shop;