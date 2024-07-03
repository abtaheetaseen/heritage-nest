import React from 'react'
import footerLogo from "../assets/images/footerLogo.png";
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
<footer className="footer bg-[#020043] text-base-content py-[130px] px-16">
    
  <aside>
    <img className='mb-5' src={footerLogo} alt="" />
    <p className='text-white mb-5'>
    123 Main Street Anytown, USAPostal Code: 12345
    </p>
    <p className='text-white'>
    Support: support@oyolloo.com <br />
    (Available : 10:00am to 07:00pm)
    </p>
  </aside>
  <nav>
    <a className="link link-hover text-gray-400">Home</a>
    <a className="link link-hover text-gray-400">About Us</a>
    <a className="link link-hover text-gray-400">Success Page</a>
    <a className="link link-hover text-gray-400">Terms And Condition</a>
  </nav>
  <nav>
    <a className="link link-hover text-gray-400">Services</a>
    <a className="link link-hover text-gray-400">Scheduling</a>
    <a className="link link-hover text-gray-400">Contact Us</a>
    <a className="link link-hover text-gray-400">Patient Portal</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Follow Us</h6>

    <div className='flex items-center justify-center gap-5'>
    <FaFacebook className='text-2xl text-gray-300' />
    <FaSquareInstagram className='text-2xl text-gray-300' />
    <FaLinkedin className='text-2xl text-gray-300' />
    <FaYoutube className='text-2xl text-gray-300' />
    </div>

    <p className='text-gray-300 mt-10'>@Docplus 2024</p>
  </nav>

</footer>
  )
}

export default Footer
