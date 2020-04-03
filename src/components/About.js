import React, {Component} from 'react'
import SocialMedia from '../components/SocialMedia'
import '../css/about.css'

class About extends Component {
    render() {
        return(
            <div className="about-container">
                <p>AnimeKnow is a web app that collects over thirty thousands subjects including
                    animation, music, tv show, game and manga. You will know what are the latest animation
                    during this season. The search feature fecth Bangumi API that you will see real time updated
                    search result. Dont know what to watch for now? The recommendation feature will recommends you
                    the animation with rating > 6..5 
                </p>
                <SocialMedia />
            </div>
        )
    }
}

export default About