import React, {Component} from 'react'
import Background from './Background'
import Information from './Information'
import '../css/card.css'

class Card extends Component {
    constructor() {
        super()
        this.state={
            id: "",
            title: "",
            description: "",
            episode: "",
            airdate: "",
            rating: "",
            rank: "",
            image: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    

    handleChange() {
        let arrayID = [8, 12, 50, 51, 234, 236, 242, 244, 254, 280, 282, 283, 284, 297, 298, 307, 309, 313, 315, 330, 340, 438, 441, 444, 451, 452, 455, 463, 464, 465, 468, 469, 472, 473, 475, 476, 485, 488, 494, 503, 511, 513, 515, 528, 530, 533, 534, 696, 697, 698, 750, 751, 767, 768, 770, 772, 799, 807, 812, 822, 823, 827, 1836, 844, 847, 849, 885, 888, 889, 890, 892, 894, 895, 897, 899, 918, 919, 928, 973, 974, 976, 977, 982, 995, 314, 317, 459, 458, 2903, 1002, 1030, 1038, 1039, 1040, 1044, 1103, 1104, 1314, 1010, 1011, 1421, 1427, 1428, 1014, 1486, 1510, 1529, 1547, 1625, 1836, 1904, 1985, 1704, 771, 2000, 2010, 2103, 2107, 2120, 2126, 2225, 2082, 2429, 2903, 2934, 2940, 2968, 2970, 2971, 2972, 2973, 2976, 3025, 3633, 3635, 2921, 3816, 3031, 3032, 3028, 844, 4562, 4019, 5426, 5431, 5468, 5651, 5653, 5654, 5655, 6389, 6390, 8019, 8290, 8372, 9713, 9717, 15007, 15489, 15910, 20582, 20847, 20431]
        let randomID = arrayID[Math.floor(Math.random() * arrayID.length)];

        let requestUrl = "https://api.bgm.tv/subject/" + randomID + "?responseGroup=small";
        fetch(requestUrl)
            .then(response => response.json())
            .then(data => {  
                let animeName = data.name_cn === "" ? data.name : data.name_cn  
                this.setState({
                    title: animeName,
                    description: data.summary,
                    episode: data.eps,
                    airdate: data.air_date,
                    rating: data.rating.score,
                    rank: data.rank,
                    image: data.images.large
                })
                console.log(data)
            })
    }

    render() {
        return(
            <div className="card-container">
               <Background 
                    image={this.state.image}
               />
                <Information 
                    title={this.state.title}
                    description={this.state.description}
                    episode={this.state.episode}
                    airdate={this.state.airdate}
                    rating={this.state.rating}
                    rank={this.state.rank}
                />
                <button onClick={this.handleChange}>Next One</button>
            </div>
        )
    }
}
export default Card