import React, { Fragment } from 'react'
import '../assets/css/badges.css'

const Badges = ({ type }) => { 
    const badge = 'badge badge-';
    return(
        <Fragment>
            <span className={`${badge}${type.name}`}>{type.name}</span>
        </Fragment>
    );
};

export default Badges;
