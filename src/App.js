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
        this.showHandler = this.showHandler.bind(this)
	}
	
	showHandler(event) {
		const {name} = event.target
        this.setState(prevState => {
			return {
				[name]: !prevState[name]
			}
		})
    }

	render() {
  		return (
    		<div className="App">
				<div className="navbar">
                	<a href="#main-page" name="airShow" onClick={this.showHandler}>主页</a>
                	<a href="#search-page" name="searchShow" onClick={this.showHandler}>搜寻</a>
                	<img src="./image/user.jpg" alt="user profile picture" />
                	<a href="#recommendation-page" name="recommShow" onClick={this.showHandler}>推荐</a>
                	<a href="#about-page" name="aboutShow" onClick={this.showHandler}>关于</a>
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
