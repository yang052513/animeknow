import React from 'react'

function Rank(props) {
    return(
        <div className="summary-item-wrap">
            <img className="summary-icon" src="./image/rank.png" alt="airdat" />
            <p className="rank">排名 {props.text}</p>
        </div>
    )
}

export default Rank