import React, {Component} from 'react'
import '../css/navbar.css'
import Card from './Card'

class Navbar extends Component {
    constructor() {
        super()
        this.state={
            show: false
        }
        this.showRecommendation = this.showRecommendation.bind(this)
    }

    showRecommendation() {
        this.setState({
            show: true 
        })
        console.log(this.state.show)
    }

    render() {

        return (
            <div className="navbar">
                <a href="#main-page">主页</a>
                <a href="#search-page">搜寻</a>
                <img src="./image/user.jpg" alt="user profile picture" />
                <a href="#recommendation-page" onClick={this.showRecommendation}>推荐</a>
                <a href="#about-page">关于</a>
            </div>
        )
    }
}
export default Navbar