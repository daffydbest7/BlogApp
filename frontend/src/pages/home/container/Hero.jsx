import React from 'react';
import {FiSearch} from 'react-icons/fi';
import { images } from '../../../constants';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 pt-5 lg:flex-row '>
      <div className='mt-16 lg:w-1/2 '>
        <h1 className='uppercase text-3xl text-center font-bold text-black md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]' > Welcome to Byteplay 
        
        </h1>
           <br/> 
           <span className=' text-teal-500 text-xl md:text-2xl lg:text-2xl'>
           <TypeAnimation
            sequence={[
            // Same substring at the start will only be typed out once, initially
            1000,
            'Making Coding Fun and Approachable... ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'We often talk about Codes...',
             1000,
             'We often talk about Innovations...',
             1000,
            'We often talk about Entertainment...',
            1000,
            'We often talk about Lifestyles...',
            1000,
            'We often talk about Travels...',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
           </span> 
           
        <p className='mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
        The best articles and information to keep you informed about code, lifestyle, entertainment, and much more. 
        Your presence here is exciting, and it promises to be a fantastic playground rife with opportunities.  
        </p>
        <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
            
            <div className='relative'>
                <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-500' />
                <input className="placeholder:font-bold font-semibold text-black  rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none
                shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4" placeholder="Search Favourite Article" type="text" />
            </div>
            <button className='w-full bg-teal-500 font-semibold rounded-lg px-5 py-3 text-white md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2
            md:w-fit md:py-2'>
                Search
            </button>
        </div>
        <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
            <span className='text-black/90 mt-2 text-semibold italic lg:text-sm lg:mt-4 xl:text-base'> Popular Tags:</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                <li className='rounded-lg bg-teal-100 bg-0pacity-10 px-3 py-1.5 font-semibold text-teal-500'>Coding</li>
                <li className='rounded-lg bg-teal-100 bg-0pacity-10 px-3 py-1.5 font-semibold text-teal-500'>Football</li>
                <li className='rounded-lg bg-teal-100 bg-0pacity-10 px-3 py-1.5 font-semibold text-teal-500'>Artificial Intelligence</li>
            </ul>
        </div>
      </div>
      <div className='hidden lg:block lg:w-1/2'>
        <img src={images.david} className="rounded-bl-full mt-16 h-3/5 w-full" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
