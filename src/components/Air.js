import React, {Component} from 'react'
import AirItem from '../components/AirItem'
import '../css/air.css'

class Air extends Component {
    constructor() {
        super()
        this.state={
            weekday: "",
            airList: [],
            count: 0
        }
    }

    componentDidMount() {
        let localDay = new Date().getDay();

        fetch("https://api.bgm.tv/calendar", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                airList: data[localDay - 1].items,
                weekday: data[localDay - 1].weekday.cn,
                count: data[localDay - 1].items.length
            })
        })
    }
    
    render() {
        {console.log(this.state.airList)}

        const airComponents 
            = this.state.airList.map(airitem =>  
                <AirItem 
                    key={airitem.id} 
                    airitem={airitem}
                />)

        return (
            <div className="air-container">
                <p className="air-title">每日放送 <span className="air-weekday">{this.state.weekday}</span><span className="air-count">(今日共上映 {this.state.count} 部新番)</span></p>
                
                <div className="air-component-container">   
                    {airComponents}      
                </div>
            </div>
        )
    }
}

export default Air