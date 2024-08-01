import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
<footer className="bg-[#ECF5FF] py-10">
  <div className="">
    
    <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 w-10/12 mx-auto py-10">

    <div className="col-span-2">
        <img src={logo} alt="Logo" className="h-28 w-28" />
        <p className="text-gray-600 font-body mt-5">Design amazing digital experiences that create more happy in the world.</p>
      </div>

      <div>
        <h3 className="text-gray-800 font-semibold mb-4 font-body">Product</h3>
        <ul className="space-y-2 font-body">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Overview</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Solutions</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tutorials</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Releases</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-800 font-semibold mb-4 font-body">Company</h3>
        <ul className="space-y-2 font-body">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">About us</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Press</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">News</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Media kit</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-800 font-semibold mb-4 font-body">Resources</h3>
        <ul className="space-y-2 font-body">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Newsletter</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Events</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Help centre</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tutorials</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Support</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-800 font-semibold mb-4 font-body">Social</h3>
        <ul className="space-y-2 font-body">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">GitHub</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">AngelList</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Dribbble</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-800 font-semibold mb-4 font-body">Legal</h3>
        <ul className="space-y-2 font-body">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Cookies</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Licenses</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Settings</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6 w-10/12 mx-auto">
      
      <p className="text-gray-600 font-body">&copy; 2024 Heritage Nest. All rights reserved.</p>
      <div className="flex space-x-4">
      <FaTwitter className='text-[#0059B1] text-3xl' />
      <FaLinkedin className='text-[#0059B1] text-3xl' />
      <FaFacebookSquare className='text-[#0059B1] text-3xl' />
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
