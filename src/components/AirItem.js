import React from 'react'

function AirItem(props) {
    return(
        <div className="air-item-wrap">
            <img className="air-item-img" src={props.airitem.images.large} alt="air image" />
            <p className="air-item-name">{props.airitem.name}</p>
            <p className="air-item-airdate">{props.airitem.air_date}</p>
        </div>
    )
}

export default AirItem