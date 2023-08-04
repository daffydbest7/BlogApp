import React from 'react';
import {images} from "../constants";
import { FaFacebook, FaGithub, FaHeartbeat, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-black'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-10 md:pt-20 md:grid-cols-12 lg:grid-cols-12'>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Product</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/"> Landing Page</a> 
          </li>
          <li>
          <a href="/"> Tools</a> 
          </li>
          <li>
          <a href="/"> Documentation</a> 
          </li>
          <li>
          <a href="/"> Refer</a> 
          </li>
          <li>
          <a href="/"> Pricing</a> 
          </li>
          <li>
          <a href="/"> Features</a> 
        </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Product</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/"> Services</a> 
          </li>
          <li>
          <a href="/"> Design</a> 
          </li>
          <li>
          <a href="/"> Research</a> 
          </li>
          <li>
          <a href="/"> Themes</a> 
          </li>
          <li>
          <a href="/"> Illustrations</a> 
          </li>
          <li>
          <a href="/"> Blog</a> 
        </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 '> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Product</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/"> Company</a> 
          </li>
          <li>
          <a href="/"> About</a> 
          </li>
          <li>
          <a href="/"> Terms</a> 
          </li>
          <li>
          <a href="/"> Privacy</a> 
          </li>
          <li>
          <a href="/"> Tool</a> 
          </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-lg'>More</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/"> More</a> 
          </li>
          <li>
          <a href="/"> License</a> 
          </li>
          <li>
          <a href="/"> Documentation</a> 
          </li>
          <li>
          <a href="/"> Refer</a> 
          </li>
          <li>
          <a href="/"> Pricing</a> 
          </li>
          <li>
          <a href="/"> Features</a> 
        </li>
      </ul>
      </div>
      <div className='col-span-10 mt-4 md:order-first md:col-span-4 lg:col-span-4'>
        <div className=''>
        <div className='py-3'>
          <img src={images.logo} className='w-50 h-6 brightness-0 invert mx-auto md:mx-0' alt="logo-sm"/>
        </div>
        <p className='text-gray-300 text-sm text-center md:text-left md:text-base'>Make Coding fun and approachable...</p>
        <div className='flex justify-center items-center text-gray-300 space-x-4 py-8 md:justify-start'>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaInstagram size={20}/></a>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaGithub size={20}/></a>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaFacebook size={20}/></a>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaTwitter size={20}/></a>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaLinkedin size={20}/></a>
        </div>
        </div>
      </div>
      <div className='hidden col-span-12 md:block mx-auto py-4'>
        <div className='text-white rounded-full p-2'>
        <FaHeartbeat size={25} className= "bg-teal-500  p-2 rounded-full mx-auto animate-spin"/>
        </div>
        <span className='text-gray-300 mt-4'>developedbydave @2023 </span> 
      </div>
     
      </footer>
    </section>
  )
}

export default Footer
