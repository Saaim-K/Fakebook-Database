import './App.css';
import Navbar from './Compnents/Navbar';
import LeftSidebar from './Compnents/Left-Sidebar';
import { CreatePost, Stories, Post } from './Compnents/Body'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='body'>
        <div className='leftSideBar'>
          <LeftSidebar />
        </div>
        <div className='mainPost'>
          <CreatePost />
          <Post/>
        </div>
        <div className='rightSideBar'></div>
      </div>

    </>
  );
}


