import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/images/logo.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:w-10/12 lg:w-10/12 mx-auto my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <NavLink to="/">
                            <li>
                                <div>Home</div>
                            </li>
                        </NavLink>
                        
                        <NavLink to="/services">
            <li>
              <div>Services</div>
            </li>
          </NavLink>

          <NavLink to="/blog">
            <li>
              <div>Blog</div>
            </li>
          </NavLink>

          <NavLink to="/aboutUs">
            <li>
              <div>About Us</div>
            </li>
          </NavLink>

            <Link to="/">
          <button className='flex items-center justify-center gap-2 border-2 border-[#343268] bg-transparent font-bold p-2 rounded-xl text-[#343268]'>
                    Appointment 
                    <MdArrowOutward />
                </button>
                </Link>

                    </ul>
                </div>
                
                <img className='ml-3' src={logo} alt="" />
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <NavLink to="/">
                            <li>
                                <div>Home</div>
                            </li>
                        </NavLink>
                        
                        <NavLink to="/services">
            <li>
              <div>Services</div>
            </li>
          </NavLink>

          <NavLink to="/blog">
            <li>
              <div>Blog</div>
            </li>
          </NavLink>

          <NavLink to="/aboutUs">
            <li>
              <div>About Us</div>
            </li>
          </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='items-center justify-center gap-2 border-2 border-[#343268] bg-transparent font-bold p-2 rounded-xl text-[#343268] hidden md:flex lg:flex'>
                    Appointment 
                    <MdArrowOutward />
                </button>
            </div>
        </div>
    )
}

export default Navbar
