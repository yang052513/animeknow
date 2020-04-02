import React from 'react'

function SearchItem(props) {
    let summary;
    let rank = props.search.rank > 0 ? props.search.rank : "暂无";
    let imageUrl = props.search.images === null ? "./image/img.jpg" : props.search.images.large

    let type;
    let story = "./image/";
    let typeicon = "./image/";
    let airdate = "./image/";
    let style, bgColor, textColor, borderColor;
    switch (props.search.type) {
        case 1:
            type = "书籍"
            typeicon += "book.png"
            story += "story_book.png"
            airdate += "airdate_book.png"
            style={color: "rgb(158, 220, 148)"}
            bgColor={backgroundColor: "rgb(158, 220, 148)"}
            textColor={color: "rgb(109, 148, 118)"}
            borderColor={border: "1px solid rgb(158, 220, 148)"}
            break;
        case 2:
            type = "动画"
            typeicon += "anime.png"
            story += "story_anime.png"
            airdate += "airdate.png"
            style={color: "rgb(220, 148, 148)"}
            bgColor = {backgroundColor: "rgb(220, 148, 148)"}
            textColor={color: "rgb(148, 109, 109)"}
            borderColor={border: "1px solid rgb(220, 148, 148)"}
            break;
        case 3:
            type = "音乐"
            typeicon += "music.png"
            story += "story_music.png"
            airdate += "airdate_music.png"
            style={color: "rgb(148, 195, 220)"}
            bgColor = {backgroundColor: "rgb(148, 195, 220)"}
            textColor={color: "rgb(109, 134, 148)"}
            borderColor={border: "1px solid rgb(148, 195, 220)"}
            break;
        case 4:
            type = "游戏"
            typeicon += "game.png"
            story += "story_game.png"
            airdate += "airdate_game.png"
            style={color: "rgb(160, 148, 220)"}
            bgColor = {backgroundColor: "rgb(160, 148, 220)"}
            textColor={color: "rgb(124, 109, 148)"}
            borderColor={border: "1px solid rgb(160, 148, 220)"}
            break;
        case 6:
            type = "三次元"
            typeicon +="tv.png"
            story += "story_real.png"
            airdate += "airdate_real.png"
            style={color: "rgb(220, 170, 148)"}
            bgColor = {backgroundColor: "rgb(220, 170, 148)"}
            textColor={color: "rgb(220, 136, 109)"}
            borderColor={border: "1px solid rgb(220, 170, 148)"}
            break;
    }
    
    if(props.search.summary.length > 40) {
        summary = props.search.summary.substring(0, 40).replace(/\s/g, "") + "..."
    } else if (props.search.summary.length <= 40 && props.search.summary.length > 0) {
        summary = props.search.summary
    } else if (props.search.summary.length == 0 && props.search.summary === "") {
        summary = "暂无介绍"
    }

    return(
        <div style={borderColor} className="search-item">
            <div className="search-heading">
                <p style={style}className="search-name">{props.search.name_cn}</p>
                <p style={bgColor} className="search-rank">Rank <span className="search-rank-text">{rank}</span></p>
            </div>

            <div className="search-subname">
                <p>{props.search.name}</p>
            </div>

            <img className="search-poster" src={imageUrl} alt={props.search.name} />
            
            <div style={textColor} className="search-info-wrap">
                <img className="search-item-icon" src={story} alt="content icon" />
                <p>{summary}</p>
            </div>
            <div style={textColor} className="search-info-wrap">
                <img className="search-item-icon" src={airdate} alt="calender icon" />
                <p className="search-air-date">{props.search.air_date}</p>
            </div>
            <div style={textColor} className="search-info-wrap">
                <img className="search-item-icon" src={typeicon} alt="rating icon" />
                <p className="search-rating"><span className="search-score">{type}</span></p>
            </div>
            
        </div>
    )

}

export default SearchItem