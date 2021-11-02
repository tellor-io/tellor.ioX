import React from 'react';
import './StuckPanel.scss'
import PropTypes from 'prop-types';

//displays white panel with header and two buttons

const StuckPanel = (props) => {

    const {
        title,
        leftBtnText,
        rightBtnText,
        leftBtnLink, 
        rightBtnLink,
        leftIcon,
        rightIcon,
    } = props;
   return (
       <div className="StuckPanel">
           <div className="StuckPanel__intro">
               <h2>{ title }</h2>
           </div>
           <div className="StuckPanel__actions button-container">
               <button  size="large" className="page-button-black" onClick={() => window.open(leftBtnLink)}>    
                    { leftIcon && (
                        <img src={leftIcon} alt="LeftIcon"/>
                    )}
                   { leftBtnText }
               </button>
               <button  size="large" className="page-button-black" onClick={() => window.open(rightBtnLink)}>  
                    { rightIcon && (
                        <img src={rightIcon} alt="RightIcon"/>
                    )}
                   { rightBtnText }
               </button>
           </div>
       </div>     
   )
}

StuckPanel.propTypes = {
    title: PropTypes.string.isRequired,
    leftBtnText: PropTypes.string.isRequired,
    rightBtnText: PropTypes.string.isRequired,
    leftBtnLink: PropTypes.string.isRequired,
    rightBtnLink: PropTypes.string.isRequired,
    LeftIcon: PropTypes.elementType,
    rightIcon: PropTypes.string,
}

export default StuckPanel;