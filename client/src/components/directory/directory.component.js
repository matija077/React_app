import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component.js';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.component.scss';

function Directory({sections}) {

    return (
        <div className="directory-menu">
            { sections.map(({ id, ...section}) =>
                <MenuItem key={id} {...section}>

                </MenuItem>
            )}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);