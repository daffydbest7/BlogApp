import React from 'react';
import {images} from "../constants";
import {Link} from "react-router-dom";
import { FaFacebook, FaGithub, FaHeartbeat, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-black'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-10 md:pt-20 md:grid-cols-12 lg:grid-cols-12'>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Easy Navigate</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/"> Landing Page</a> 
          </li>
          <li>
          <a href="/"> Tools</a> 
          </li>
          <li>
          <a href="/"> Entertainment</a> 
          </li>
         
          <li>
          <a href="/"> Features</a> 
        </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Services</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/">Web development</a> 
          </li>
          <li>
          <a href="/"> Design</a> 
          </li>
          <li>
          <a href="/"> Research</a> 
          </li>
          <li>
          <a href="/"> Data Analysis</a> 
          </li>
         
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 '> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Favourites</h3>
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
          <a href="/"> portfolio</a> 
          </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-lg'>Latest Articles</h3>
      <ul className='text-teal-500 text-sm mt-5 space-y-4'>
        <li>
          <a href="/"> Sports</a> 
          </li>
          <li>
          <a href="/">Coding </a> 
          </li>
          <li>
          <a href="/"> Music</a> 
          </li>
          <li>
          <a href="/"> Dance</a> 
          </li>
          <li>
          <a href="/"> Auditions</a> 
          </li>
          <li>
          <a href="/"> Lifetsyle</a> 
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
          <a href="https://www.instagram.com/daffydbest" target='_blank' className='hover:text-teal-500 hover:animate-spin'><FaInstagram size={20}/></a>
          <a href="https://www.github.com/daffydbest7" target='_blank' className='hover:text-teal-500 hover:animate-spin'><FaGithub size={20}/></a>
          <a href="https://www.facebook.com/daffydbest" target='_blank' className='hover:text-teal-500 hover:animate-spin'><FaFacebook size={20}/></a>
          <a href="https://www.twitter.com/daffydbest" target='_blank' className='hover:text-teal-500 hover:animate-spin'><FaTwitter size={20}/></a>
          <a href="www.linkedin.com/in/david-lawrence-6b2513b0" target='_blank' className='hover:text-teal-500 hover:animate-spin'><FaLinkedin size={20}/></a>
        </div>
        </div>
      </div>
        <div className='col-span-12 md:block mx-auto py-4'>
        <span className='text-gray-300 text-xs md:text-sm mt-4'>developedbydave ©2023 </span> 
        </div>
      </footer>
    </section>
  )
}

export default Footer
