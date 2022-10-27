import React from 'react';
import './index.css'
// import Images from '../../images';
import img0 from '../../images/Saaim.jpg'
import img1 from '../../images/Friends.png'
import img2 from '../../images/Groups.png'
import img3 from '../../images/Marketplace.png'
import img4 from '../../images/Watch.png'
import img5 from '../../images/Messenger.png'
import img6 from '../../images/Saved.png'
import img7 from '../../images/Favourites.png'
import img8 from '../../images/Pages.png'
import img9 from '../../images/Memories.png'

export default function LeftSidebar() {
    return (
        <div className="leftSidebar">
            <div><img src={img0} alt="" className="leftSidebar-profile" />Saaim Khan</div>
            <div><img src={img1} alt="" className="leftSidebar-friends" />Friends</div>
            <div><img src={img2} alt="" className="leftSidebar-groups" />Groups</div>
            <div><img src={img3} alt="" className="leftSidebar-marketplace" />Marketplace</div>
            <div><img src={img4} alt="" className="leftSidebar-watch" />Watch</div>
            <div><img src={img5} alt="" className="leftSidebar-messenger" />Messenger</div>
            <div><img src={img6} alt="" className="leftSidebar-saved" />Saved</div>
            <div><img src={img7} alt="" className="leftSidebar-favourites" />Favourite</div>
            <div><img src={img8} alt="" className="leftSidebar-pages" />Pages</div>
            <div><img src={img9} alt="" className="leftSidebar-memories" />Memories</div>
        </div>
    )
}
// <div className="sidebar">
//     <div><img src={Images.Favourites} alt="ccc" /></div>
//     <div><img src={Images.Friends} alt="ccc" /></div>
//     <div><img src={Images.Groups} alt="ccc" /></div>
//     {/* <div><img src={Images.} alt="ccc" /></div>
//     <div><img src={Images.} alt="ccc" /></div>
//     <div><img src={Images.} alt="ccc" /></div> */}
// </div>
