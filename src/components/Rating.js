import React from 'react'

function Rating(props) {
    return(
        <p className="rating">评分: {props.text}</p>
    )
}

export default Rating