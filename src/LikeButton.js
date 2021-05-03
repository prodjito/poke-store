import React from 'react'
import './LikeButton.css'
import thumbsUpImage from './thumbs_up.png'

export default function LikeButton(props) {
    const className = props.liked ? 'btn btn-liked' : 'btn btn-unliked'
    return (
        <div>
            <button className={className} onClick={props.onClick}>
                <img src ={thumbsUpImage} alt='' style={{width: 20, height: 20}}/>
                </button>
        </div>
    )
}