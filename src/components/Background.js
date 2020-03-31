import React from 'react'

function Background(props) {
    return(
        <div className="card-image-container">
            <img className="card-image" src={props.image}  alt="anime-img"/>
        </div>
    )
}
export default Background