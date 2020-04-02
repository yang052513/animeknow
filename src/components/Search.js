import React, {Component} from 'react'
import '../css/search.css'
import SearchItem from '../components/SearchItem'

class Search extends Component {
    constructor() {
        super()
        this.state={
            search_input: "",
            result: [],
            id: "",
            name: "",
            imgUrl: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        let keywords = value
        let requestUrl = "https://api.bgm.tv/search/subject/" + keywords + "?responseGroup=large&max_results=25"
        
        if(value.length > 0) {
            fetch(requestUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    result: data.list
                })
            console.log(this.state.result.length)
            console.log(this.state.result)
            
            })  
        }
    }
    render() {
        const searchComponents = 
            this.state.result.map(result =>  <SearchItem key={result.id} search={result}/>)

        return(
            <div className="search-container">
                <div className="search-box-wrap">
                    <img className="search-icon" src="./image/search.png" alt="search-icon" />
                    <input 
                        name="search_input"
                        className="search-box" 
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="输入你想搜寻的动画名称..." 
                    />         
                </div>

                <div className="search-result-wrap">
                    {searchComponents}
                </div>
            </div>
        )
    }
}

export default Search