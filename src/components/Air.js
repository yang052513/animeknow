import React, {Component} from 'react'
import AirItem from '../components/AirItem'
import '../css/air.css'

class Air extends Component {
    constructor() {
        super()
        this.state={
            weekday: "",
            airList: []
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
                weekday: data[localDay - 1].weekday.cn
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
            <div>
                <p>今日放送 {this.state.weekday}</p>
                {airComponents}
            </div>
        )
    }
}

export default Air