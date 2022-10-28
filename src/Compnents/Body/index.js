import React from 'react'
import { useState, useEffect } from 'react';
import './index.css'
import img from '../../images/Saaim.jpg'
import { RiLiveFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";


export function CreatePost() {
    const [postText, setPostText] = useState('')

    useEffect(() => {

    }, [])

    const text = (e) => {
        e.preventDefault()
        console.log('form submitted');
    }

    return (
        <div className="createPost">
            <div className='createPost-input-box'>
                <span> <img src={img} className='postImage' width='100px' alt="" /></span>
                <span><form onSubmit={text} ><input type="text" className='createPost-input' placeholder="What's on your mind, Saaim?" /></form></span>
            </div>
            <div className='createPost-button'>
                <div className='createPost-live'>
                    <span className='live-icon'><RiLiveFill /></span>
                    <span className='live-text'>Live Video</span>
                </div>
                <div className='createPost-gallery'>
                    <span className='gallery-icon'><FaPhotoVideo /></span>
                    <span className='gallery-text'>Photo/Video</span>
                </div>
                <div className='createPost-feeling'>
                    <span className='feeling-icon'><MdEmojiEmotions /></span>
                    <span className='feeling-text'>Feeling/Activity</span>
                </div>
            </div>
        </div>
    )
}

export function Post() {
    return (
        <>
            <div className="post">
                <div><img src={img} className='postImage' alt="" /></div>
                <div>
                    <span>Saaim Khan</span>
                    <span>sdfd</span>
                </div>
            </div>
            {console.log(new Date().getTime)}
        </>
    )
}


// export function Stories() {
//     return (
//         <div className="stories">

//         </div>
//     )
// }

