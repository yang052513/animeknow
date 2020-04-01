import React from 'react'

function Episode(props) {
    return(
        <div className="summary-item-wrap">
            <img className="summary-icon" src="./image/episode.png" alt="episode" />
            <p className="episode">话数 {props.text}</p>
        </div>
        
    )
}

export default Episode