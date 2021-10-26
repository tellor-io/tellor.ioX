import React from 'react';
import PropTypes from 'prop-types';

import './HeaderDesc.scss';

const HeaderDesc = (props) => {
    const { title, description } = props;

    return (
        <div className="HeaderDesc">
            <h2 className="page-header-small">{ title }</h2>
            <p className="page-text ">{ description }</p>
        </div>
    )
} 

HeaderDesc.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default HeaderDesc;