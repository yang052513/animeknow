import React from 'react'

function SearchItem(props) {
    return(
        <div className="search-item">
            <p>{props.search.name_cn}</p>
            <p>{props.search.summary}</p>
            <p>{props.search.air_date}</p>
        </div>
    )

}

export default SearchItem