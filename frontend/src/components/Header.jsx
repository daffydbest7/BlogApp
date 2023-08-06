import React, { useState } from 'react';
import { images } from '../constants';
import {AiOutlineMenu, AiOutlineClose, } from "react-icons/ai"
import {MdKeyboardArrowDown} from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/user';
import {Link, useNavigate } from 'react-router-dom';
import {BiSolidMoon} from "react-icons/bi";
//import {PiSunLight} from "react-icons/pi";



const NavListInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/pages/about" },
      { title: "Contact us", href: "/pages/contact" },
    ],
  },
  { name: "Entertainment", type: "link", href: "/entertainment" },
  { name: "Tools", type: "link", href: "/tools" },
];

const NavList =({item})=>{
  const [dropdown, setDropDown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropDown ((curState) => {
      return !curState;
    })
  }

  return (
    <li className=' relative group'>
      { item.type === "link" ? (<>
          <Link to={item.href} className='px-4 py-2'>{item.name}
          </Link>
          <span className='cursor-pointer text-teal-500 absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[80%] opacity-0 group-hover:opacity-100'>|</span>
          </> 
          ): (
          <div className='flex flex-col items-center'>
           <button onClick={toggleDropdownHandler}
           className='px-4 py-2 group-hover flex gap-x-1 items-center'> 
           {item.name}
           <MdKeyboardArrowDown/>
           </button>
           <div className={`${dropdown ? "block" : "hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-o lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className='bg-black/80 lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                {item.items.map((page,index)=> (
                  
                    <Link key={index} to={page.href} className='hover:bg-teal-500 hover:text-white px-4 py-2 text-white lg:text-black'>
                      {page.title}
                    </Link>
                  
                ))}
              
            </ul>
           </div>
          </div>
          )}
        </li>
  )
}

const Header = () => {
  // signin constant 
const navigate = useNavigate();
// use dispatch to enable the logout handler
const dispatch = useDispatch();

//states for making nav bar visible and invisible
const [navIsVisible, setNavIsVisible] = useState(false);
const userState = useSelector(state => state.user);
const [profileDropdown, setProfileDropdown] = useState(false)

// the nav handler
const navVisibilityHandler =()=> {
  setNavIsVisible ((curState)=> {
    return !curState;
  })
}

//logouthandler
const logoutHandler =()=>{
  dispatch(logout());
}

  return (
    <section className='sticky top-0 left-0 z-50  bg-white'>
    <div className='container mx-auto px-5 flex justify-between pt-5 pb-8 items-center'>
    <Link to="/">
      <img className='w-32 md:w-52 lg:w-80' src={images.logonew} alt="logo"/>
    </Link>
    {/** hamburger icons */}
    <div className='lg:hidden z-50'>
      {navIsVisible ? <AiOutlineClose  onClick={navVisibilityHandler} className='w-6 h-6'/>
       : 
       <AiOutlineMenu onClick={navVisibilityHandler} className='w-6 h-6'/> }
    </div>
    
    <div className={`${navIsVisible ? "right-0" : "-right-full"} 
    transition-all duration-500 z-[49]  bg-black lg:bg-transparent mt-[56px] lg:mt-0 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed  top-0 bottom-0 lg:static gap-x-9 items-center`}> 
      <div className='text-white mb-10 lg:mb-0 lg:text-black'>
      <BiSolidMoon />
      </div>
      <ul className='items-center text-white lg:text-black gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold '>
        
        {NavListInfo.map((item) => (
          <NavList key={item.name} item={item}/> 
        ))}
      </ul>
      {userState.userInfo ? (<div className=' items-center text-white lg:text-black gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold'>
        <div className='relative group'>
        <div className='flex flex-col items-center'>
           <button onClick={()=> setProfileDropdown(!profileDropdown)} 
           className='px-4 py-2 group-hover flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-teal-500  rounded-full text-teal-500 font-semibold hover:bg-teal-500 hover:text-white transition-all duration-500'> 
           <span>Account</span>
           <MdKeyboardArrowDown/>
           </button>
           <div className={`${profileDropdown ? "block" : "hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-o lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className='bg-black/80 lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                {userState?.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="hover:bg-teal-500 hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                        >
                          Admin Dashboard
                        </button>
                      )}
                   
                   <button  onClick={()=> navigate("/profile")} 
                   type='button' className='hover:bg-teal-500 hover:text-white px-4 py-2 text-white lg:text-black'>
                      Profile Page
                    </button>
                  
                    <button onClick={logoutHandler} type='button' className='hover:bg-teal-500 hover:text-white px-4 py-2 text-white lg:text-black'>
                      Logout
                    </button>
            </ul>
           </div>
          </div>
        </div>
        
      </div>) :
      (
        <button onClick={()=> navigate("/login")}
        className='mt-5 lg:mt-0 border-2 border-teal-500 px-6 py-2 rounded-full text-teal-500 font-semibold hover:bg-teal-500 hover:text-white transition-all duration-500'>Sign In</button>
      )
      }
      
      </div>
    </div>
    </section>
   
  )
}

export default Header
