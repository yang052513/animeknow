import React from 'react'

function AirDate(props) {
    return (
        <div className="summary-item-wrap">
            <img className="summary-icon" src="./image/airdate.png" alt="airdat" />
            <p className="air-date">放送日 {props.text}</p>
        </div>
  
    )
}

export default AirDate