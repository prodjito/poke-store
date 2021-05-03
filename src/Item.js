import React from 'react'
import './App.css'
import LikeButton from './LikeButton'

export default class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item : {
                names : [
                    {
                        language : {
                            name : 'en'
                        },
                        name : null
                    }
                ],
                flavor_text_entries : [
                    {
                        language : {
                            name : 'en'
                        },
                        text : null
                    }
                ],
                sprites : {
                    default : null
                }
            },
            isLoading : true,
            liked : false
        }

        this.handleLikeClick = this.handleLikeClick.bind(this)
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/item/${this.props.match.params.id}`)
            .then(data => data.json())
            .then(item => {
                this.setState({
                    item : item,
                    isLoading : false
                })
            }).catch( (err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : 
                <div>
                    <h1>{this.getEnglish(this.state.item.names).name}</h1>
                    <h2>{this.getEnglish(this.state.item.flavor_text_entries).text}</h2>
                    <img src={this.state.item.sprites.default} alt='' style={{width: 100, height: 100}}/>
                    <LikeButton onClick = {this.handleLikeClick} liked = {this.state.liked}/>
                </div> } 
            </div>
        )
    }

    getEnglish(arr) {
        const englishOnly = arr.filter(name => name.language.name === 'en')
        return englishOnly[0]
    }

    handleLikeClick() {
        this.setState({
            liked: !this.state.liked
        })
    }

}
