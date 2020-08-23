import React, { Component } from 'react'
import AirItem from '../components/AirItem'
import '../css/air.css'

class Air extends Component {
  constructor() {
    super()
    this.state = {
      weekday: '',
      airList: [],
      count: 0,
      loading: false,
    }
  }

  componentDidMount() {
    let currDay = new Date().getDay()
    let localDay

    if (currDay === 0) {
      localDay = 6
    } else {
      localDay = currDay - 1
    }

    const url = 'https://api.bgm.tv/calendar'
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'

    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          airList: data[localDay].items,
          weekday: data[localDay].weekday.cn,
          count: data[localDay].items.length,
          loading: true,
        })
      })
  }

  render() {
    {
      console.log(this.state.airList)
    }

    const airComponents = this.state.airList.map(airitem => (
      <AirItem key={airitem.id} airitem={airitem} />
    ))

    return (
      <div>
        {this.state.loading && (
          <div className="air-container">
            <p className="air-title">
              每日放送 <span className="air-weekday">{this.state.weekday}</span>
              <span className="air-count">
                (今日共上映 {this.state.count} 部新番)
              </span>
            </p>

            <div className="air-component-container">{airComponents}</div>
          </div>
        )}
      </div>
    )
  }
}

export default Air
