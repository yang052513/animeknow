import React from 'react'

function Rating(props) {
    return(
        <div className="summary-item-wrap">
            <img className="summary-icon" src="./image/rating.png" alt="airdat" />
            <p className="rating">评分 {props.text}</p>
        </div>
    )
}

export default Rating