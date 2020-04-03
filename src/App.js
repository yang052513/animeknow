import React, {Component} from 'react';
import Card from './components/Card'
import Search from './components/Search'
import Air from './components/Air'
import './css/navbar.css'


class App extends Component {
	constructor() {
        super()
        this.state={
			airShow: true,
			searchShow: false,
			recommShow: false,
			aboutShow: false
        }
		// this.showHandler = this.showHandler.bind(this)
		this.handleAir = this.handleAir.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleRecomm = this.handleRecomm.bind(this)
		this.handleAbout = this.handleAbout.bind(this)
	}
	
	handleAir() {
		this.setState({
			airShow: !this.state.airShow,
			searchShow: false,
			recommShow: false,
			aboutShow: false
		})
	}

	handleSearch() {
		this.setState({
			airShow: false,
			searchShow: !this.state.searchShow,
			recommShow: false,
			aboutShow: false
		})
	}

	handleRecomm() {
		this.setState({
			airShow: false,
			searchShow: false,
			recommShow: !this.state.recommShow,
			aboutShow: false
		})
	}

	handleAbout() {
		this.setState({
			airShow: false,
			searchShow: false,
			recommShow: false,
			aboutShow: !this.state.aboutShow
		})
	}

	// showHandler(event) {
	// 	const {name} = event.target

    //     this.setState(prevState => {
	// 		return {
	// 			[name]: !prevState[name]
	// 		}
	// 	})
    // }

	render() {
		let navStyle = {
			borderBottom: "1px solid rgb(135, 70, 70)",
    		color: "rgb(135, 70, 70)",
    		paddingBottom: "5px"
		}

  		return (
    		<div className="App">
				<div className="navbar">
                	<a style={this.state.airShow ? navStyle :  {} } href="#main-page" name="airShow" onClick={this.handleAir}>主页</a>
                	<a style={this.state.searchShow ? navStyle :  {} } href="#search-page" name="searchShow" onClick={this.handleSearch}>搜寻</a>
                	<img src="./image/user.jpg" alt="user profile picture" />
                	<a style={this.state.recommShow ? navStyle :  {} } href="#recommendation-page" name="recommShow" onClick={this.handleRecomm}>推荐</a>
                	<a style={this.state.aboutShow ? navStyle :  {} } href="#about-page" name="aboutShow" onClick={this.handleAbout}>关于</a>
            	</div>

				{/* 用户点击推荐页面 渲染推荐动画卡片 */}
        		{this.state.recommShow ? (<Card />) : null}
				{this.state.searchShow ? (<Search />) : null}
				{this.state.airShow ? (<Air />) : null}
    		</div>
  		);
	}
}

export default App;
