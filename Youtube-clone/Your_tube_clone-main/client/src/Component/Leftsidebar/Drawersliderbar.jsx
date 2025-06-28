import React from 'react'
import "./Leftsidebar.css"
import image1 from "./image 1.png"
import image7 from "./image 7.png"
import image3 from "./image 3.png"
import image4 from "./image 4.png"
import image5 from "./image 5.png"
import image6 from "./image 6.png"
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdSubscriptions, MdOutlineWatchLater } from "react-icons/md"
import { FaHistory } from 'react-icons/fa'
import shorts from "./shorts.png"
import { NavLink } from 'react-router-dom'
const Drawersliderbar = ({ toggledraw, toggledrawersidebar }) => {
  return (
    <div className="container_DrawaerLeftSidebar" style={toggledrawersidebar}>
      <div className="container2_DrawaerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img src={shorts} width={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>

          <div className="icon_sidebar_div">
            <p>
              <MdSubscriptions size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_Drawerleftsidebar">
          <NavLink to={'/Library'} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>
          <NavLink to={'/Watchhistory'} className="icon_sidebar_div">
            <p>
              <FaHistory size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>
          <NavLink to={'/Yourvideo'} className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>
          <NavLink to={'/Watchlater'} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={'/Likedvideo'} className="icon_sidebar_div">
            <p>
              <AiFillLike size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </NavLink>
        </div>
        <div className="subScriptions_lsdbar">
          <h3><em><u>Your Subscription</u></em></h3>
          <div className="chanel_lsdbar">
            <p className="circle-wrapper">
              <img src={image1} alt="Channel Logo" />
              </p>
            <div>Galatta voice</div>
          </div>
          <div className="chanel_lsdbar">
            <p className="circle-wrapper">
              <img src={image7} alt="Channel Logo 7" />
              </p>
            <div>Parithabangal</div>
          </div>
          <div className="chanel_lsdbar">
            <p className="circle-wrapper">
              <img src={image3} alt="Channel Logo 3" />
              </p>
            <div>Micset</div>
          </div>
          <div className="chanel_lsdbar">
            <p className="circle-wrapper">
              <img src={image5} alt="Channel Logo 5" />
              </p>
            <div>Tamil Hacks 2.0</div>
          </div>
          <div className="chanel_lsdbar">
           <p className="circle-wrapper">
              <img src={image4} alt="Channel Logo 4" />
              </p>
            <div>No buddy can find me</div>
          </div>
          <div className="chanel_lsdbar">
            <p className="circle-wrapper">
              <img src={image6} alt="Channel Logo 6" />
              </p>
            <div>pikachu</div>
          </div>
        </div>
      </div>
      <div className="container3_DrawaerLeftSidebar" onClick={() => toggledraw()}></div>
    </div>
  )
}

export default Drawersliderbar