import React from 'react'

import PropTypes from 'prop-types'
import './JobListing.scss'


const JobListing = (props) => {

    const {
        id,
        title,
        description,
        responsibilities,
        qualifications,
        outro
    } = props;

    return (
        <React.Fragment key={id}>
            <div className="JobListing" >

                <h3>{title}</h3>

                {/* create multiple paragraph description */}
                {description && (
                    description.map((text, index) => {
                        return (
                            <React.Fragment key={`desc-${index}`}>
                                <p className="page-text-black">{text}</p> 
                            </React.Fragment>
                        ) 
                    })
                )}

                <div className="JobListing__resp">
                    <p className="page-text-black">Responsibilities: </p>
                    {/* loop through responsibilities  */}
                    {responsibilities && (
                        responsibilities.map((text, index) => {
                            return (
                                <ul key={`desc-${index}`} className="page-text-black">
                                    <li>{text}</li> 
                                </ul>
                            ) 
                        })
                    )}
                </div>

                <div className="JobListing__qual">
                    <p className="page-text-black">Qualifications: </p>
                    {/* loop through qualifications */}
                    {qualifications && (
                        qualifications.map((text, index) => {
                            return (
                                <ul key={`desc-${index}`} className="page-text-black">
                                    <li>{text}</li> 
                                </ul>
                            ) 
                        })
                    )}
                </div>

                <div className="JobListing__outro">
                    <p className="page-text-black">{outro}</p>
                </div>
                
            </div>
        </React.Fragment>
    )
}

JobListing.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.array,
    responsibilities: PropTypes.array,
    qualifications:  PropTypes.array,
    outro: PropTypes.string,
}

export default JobListing;
