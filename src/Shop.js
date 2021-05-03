import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

export default class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : [],
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/item")
            .then(data => data.json())
            .then(items => {
                this.setState({
                    items : items.results
                })
            }).catch( (err) => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state.items)
        return (
            <div>
                {this.state.items.map((item, index) => (
                    <h1 key={index}>
                        <Link to={`/shop/${index+1}`}>{item.name}</Link>
                    </h1>
                ))}
            </div>
        )
    }
}