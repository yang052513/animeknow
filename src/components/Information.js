import React from 'react'
import Title from './Title'
import Description from './Description'
import Episode from './Episode'
import AirDate from './AirDate'
import Rank from './Rank'
import Rating from './Rating'

function Information(props) {
    return(
        <div className="card-information-container">
            <Title text={props.title}/>
            <Description text={props.description}/>
            <Episode text={props.episode}/>
            <AirDate text={props.airdate}/>
            <Rating text={props.rating}/>
            <Rank text={props.rank}/>
        </div>
    )
}
export default Information