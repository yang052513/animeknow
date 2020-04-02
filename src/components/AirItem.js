import React from 'react'

function AirItem(props) {
    let air_image = props.airitem.images === null ? "./image/img.jpg" : props.airitem.images.large
    let air_name = props.airitem.name_cn === "" ? props.airitem.name : props.airitem.name_cn
    return(
        <div className="air-item-wrap">
            <img className="air-item-img" src={air_image} alt="air image" />
            <p className="air-item-name">{air_name}</p>
        </div>
    )
}

export default AirItem