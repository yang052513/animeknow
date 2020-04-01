import React from 'react'

function SearchItem(props) {
    let summary;
    let rank = props.search.rank > 0 ? props.search.rank : "暂无";

    if(props.search.summary.length > 40) {
        summary = props.search.summary.substring(0, 40).replace(/\s/g, "") + "..."
    } else if (props.search.summary.length <= 40 && props.search.summary.length > 0) {
        summary = props.search.summary
    } else if (props.search.summary.length == 0 && props.search.summary === "") {
        summary = "暂无介绍"
    }

    return(
        <div className="search-item">
            <div className="search-heading">
                <p className="search-name">{props.search.name_cn}</p>
                <p className="search-rank">Rank <span className="search-rank-text">{rank}</span></p>
            </div>
            <p className="search-sub-name">{props.search.name}</p>
            <img className="search-poster" src={props.search.images.large} alt={props.search.name} />
            <div className="search-info-wrap">
                <img className="search-item-icon" src="./image/content.png" alt="content icon" />
                <p>{summary}</p>
            </div>
            <div className="search-info-wrap">
                <img className="search-item-icon" src="./image/airdate.png" alt="calender icon" />
                <p className="search-air-date">{props.search.air_date}</p>
            </div>
            <div className="search-info-wrap">
                <img className="search-item-icon" src="./image/rating.png" alt="rating icon" />
                <p className="search-rating"><span className="search-score">{props.search.rating.score}</span> ({props.search.rating.total}人评分)</p>
            </div>
            
        </div>
    )

}

export default SearchItem