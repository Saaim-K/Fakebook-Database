import React from 'react'
import './index.css'
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaHome, FaBell } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";
import { BsSearch, BsMessenger, BsSunFill } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import img0 from '../../images/Saaim.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='fb-search'>
        <span className='fb-logo'><img src="https://img.icons8.com/fluency/50/000000/facebook-new.png " alt='facebook-logo' /></span>
        <span className='fb-input'>
          <span className='fb-input-logo'><BsSearch /></span>
          <span className='fb-input-search'><input type="text" placeholder='Search Facebook' /></span>
        </span>
      </div>

      <div className='fb-home'>
        <span><FaHome /></span>
        <span><MdOutlineOndemandVideo /></span>
        <span><GiShop /></span>
        <span><HiUserGroup /></span>
        <span><SiFacebookgaming /></span>
      </div>

      <div className='fb-account'>
        <span><BsSunFill /></span>
        <span><BsMessenger /></span>
        <span><FaBell /></span>
        <span><img src={img0} className='profile' alt="" /></span>
      </div>

    </div>
  )
}
export default Navbar
