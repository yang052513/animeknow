import React from 'react'
import Title from './Title'
import Description from './Description'
import Episode from './Episode'
import AirDate from './AirDate'
import Rank from './Rank'
import Rating from './Rating'
import Collection from './Collection'

function Information(props) {
    return(
        <div className="card-information-container">
            <Title text={props.title}/>
            <div className="summary">    
                <Episode text={props.episode}/>
                <AirDate text={props.airdate}/>
                <Rating text={props.rating}/>
                <Rank text={props.rank}/>
            </div>
            <Description text={props.description}/>
            <Collection 
                wish={props.wish}
                collect={props.collect}
                doing={props.doing}
                onhold={props.onhold}
                dropped={props.dropped}
            />
        </div>
    )
}
export default Information