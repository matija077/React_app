import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

function MenuItem({title, imageUrl, id, size, history, linkUrl, match, ...rest}) {
    return (
        <div
        className={ `menu-item ${size}`} onClick={() => history.push(
            `${match.url}${linkUrl}`
        )}>
            <div className="background-image"
                style= {{backgroundImage: `url(${imageUrl})`}}
            >

            </div>
            <div className="content">
                <h1 className="title ">{ title.toUpperCase() }</h1>
                <span className="subtitle "> SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);