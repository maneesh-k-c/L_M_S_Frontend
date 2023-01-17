import React, { useState } from 'react'
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

import {FavoriteBorder,SearchSharp,ShoppingCartOutlined,ExpandMoreOutlined,AppsSharp} from '@mui/icons-material';

export default function Header() {
    const [nav,setNav]=useState(false)
  return (
    <div className='navbar-common'>
    <div className='navbar-common-cor-inp'>
        <div className='navbar-common-img'>
            <img src="/logo192.png" alt="" />
        </div>
    <div className='navbar-common-c-s'>
    <div className='navbar-common-course'>
            <div><AppsSharp style={{fontSize:"35px"}}/></div>
            <div style={{paddingTop:"5px"}}>Courses</div>
        </div>
        <div className='navbar-common-input'>
       <div className='navbar-common-search'><SearchSharp  sx={{ fontSize: "30px" ,paddingTop:"0px"}}/></div>
            <div><input type="text" name="" id="" placeholder='what you want to explore ?'/></div>
        </div> 
    </div>
       <div className='navbar-common-l-s'>
       <div className='navbar-common-login'>
            Login
        </div>
        <div className='navbar-common-started'>
            Get Started
        </div>
       </div>
      
      </div>
      <div onClick={()=> setNav(!nav)} className='navbar-common-open-close'>
        {!nav?<FaBars/>:<FaTimes/>}
       </div>
       <div>
        {
            nav && <div className='navbar-common-collapse'>
                  <div className='collapse-navbar-common-cor-inp'>
        <div className='navbar-common-img'>
            <img src="/logo192.png" alt="" />
        </div>
    <div className='navbar-common-c-s'>
    <div className='navbar-common-course'>
            <div><AppsSharp style={{fontSize:"35px"}}/></div>
            <div className='navbar-common-course-none' style={{paddingTop:"5px"}}>Courses</div>
        </div>
        <div className='navbar-common-input'>
       <div className='navbar-common-search'><SearchSharp  sx={{ fontSize: "30px" ,paddingTop:"0px"}}/></div>
            <div><input type="text" name="" id="" placeholder='what you want to explore ?'/></div>
        </div> 
    </div>
       <div className='navbar-common-l-s'>
       <div className='navbar-common-login'>
            Login
        </div>
        <div className='navbar-common-started'>
            Get Started
        </div>
       </div>
      
      </div>
                </div>
        
        }
       </div>
</div>
  )
}
