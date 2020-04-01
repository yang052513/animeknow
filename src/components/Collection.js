import React from 'react'

function Collection(props) {
    return(
        <div className="collection-container">
            <p className="wish">想看 {props.wish}</p>
            <p className="collect">看过 {props.collect}</p>
            <p className="doing">在看 {props.doing}</p>
            <p className="on-hold">搁置 {props.onhold}</p>
            <p className="dropped">抛弃 {props.dropped}</p>
        </div>
    )
}

export default Collection