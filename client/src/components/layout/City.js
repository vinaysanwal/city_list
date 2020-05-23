import React from 'react'
import PropTypes from 'prop-types'


const City = ({
    city: {
        name , state
    }
})=> {
    return (
            <ul>
               <li><span>City Name:: </span>{name}</li> 
               <li><span>City State:: </span>{state}</li>
            </ul>
    )
}


City.propTypes = {
    city: PropTypes.object.isRequired,
}

export default City
