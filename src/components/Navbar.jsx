import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/images/logo.png"

const Navbar = () => {
    return (
      <div className="navbar flex items-center justify-between h-[96px] bg-[#ECF5FF] lg:px-[112px] shadow-custom-shadow-2">

<div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-body">
      <li><a>Buy</a></li>
      <li>
        <a>Sell</a>
      </li>
      <li><a>Services</a></li>
      <NavLink to="/aboutUs">
      <li><a>About</a></li>
      </NavLink>
      <NavLink to="/buyerScreen">
      <li><a>Buyer Screen</a></li>
      </NavLink>
    </ul>
  </div>

  <div className="">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-body">
        <li><a>Buy</a></li>
      <li>
        <a>Sell</a>
      </li>
      <li><a>Services</a></li>
      <NavLink to="/aboutUs">
      <li><a>About</a></li>
      </NavLink>
      <NavLink to="/buyerScreen">
      <li><a>Buyer Screen</a></li>
      </NavLink>
      </ul>
    </div>
    <Link to="/">
      <img className='h-20 w-20' src={logo} alt="" />
    </Link>
  </div>

  <div className="flex items-center justify-end gap-3">
    <p className='font-body text-[14px]'>Manage Rentals</p>
    <button className="w-[96px] h-[40px] rounded-[8px] bg-[#C5E2FF] text-[#0059B1]">Sign In</button>
  </div>
</div>
    )
}

export default Navbar
