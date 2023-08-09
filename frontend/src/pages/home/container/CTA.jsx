import React from 'react';
import { images } from '../../../constants';

const CTA = () => {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg'  className='w-full max-h-40 rounded-tl-full rounded-tr-full translate-y-[2px]' preserveAspectRatio='none' viewBox='0 0 1080 900'><rect fill='#5FCFC2' width='1080' height='900'/><g fill-opacity='.1'><polygon fill='#444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='#AAA' points='270 150 360 0 180 0'/><polygon fill='#DDD' points='450 150 360 300 540 300'/><polygon fill='#999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='#DDD' points='630 150 720 0 540 0'/><polygon fill='#444' points='810 150 720 300 900 300'/><polygon fill='#FFF' points='810 150 900 0 720 0'/><polygon fill='#DDD' points='990 150 900 300 1080 300'/><polygon fill='#444' points='990 150 1080 0 900 0'/><polygon fill='#DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='#666' points='270 450 180 600 360 600'/><polygon fill='#AAA' points='270 450 360 300 180 300'/><polygon fill='#DDD' points='450 450 360 600 540 600'/><polygon fill='#999' points='450 450 540 300 360 300'/><polygon fill='#999' points='630 450 540 600 720 600'/><polygon fill='#FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='#DDD' points='810 450 900 300 720 300'/><polygon fill='#AAA' points='990 450 900 600 1080 600'/><polygon fill='#444' points='990 450 1080 300 900 300'/><polygon fill='#222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='#DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='#444' points='630 750 720 600 540 600'/><polygon fill='#AAA' points='810 750 720 900 900 900'/><polygon fill='#666' points='810 750 900 600 720 600'/><polygon fill='#999' points='990 750 900 900 1080 900'/><polygon fill='#999' points='180 0 90 150 270 150'/><polygon fill='#444' points='360 0 270 150 450 150'/><polygon fill='#FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='#222' points='0 300 -90 450 90 450'/><polygon fill='#FFF' points='0 300 90 150 -90 150'/><polygon fill='#FFF' points='180 300 90 450 270 450'/><polygon fill='#666' points='180 300 270 150 90 150'/><polygon fill='#222' points='360 300 270 450 450 450'/><polygon fill='#FFF' points='360 300 450 150 270 150'/><polygon fill='#444' points='540 300 450 450 630 450'/><polygon fill='#222' points='540 300 630 150 450 150'/><polygon fill='#AAA' points='720 300 630 450 810 450'/><polygon fill='#666' points='720 300 810 150 630 150'/><polygon fill='#FFF' points='900 300 810 450 990 450'/><polygon fill='#999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='#666' points='0 600 90 450 -90 450'/><polygon fill='#AAA' points='180 600 90 750 270 750'/><polygon fill='#444' points='180 600 270 450 90 450'/><polygon fill='#444' points='360 600 270 750 450 750'/><polygon fill='#999' points='360 600 450 450 270 450'/><polygon fill='#666' points='540 600 630 450 450 450'/><polygon fill='#222' points='720 600 630 750 810 750'/><polygon fill='#FFF' points='900 600 810 750 990 750'/><polygon fill='#222' points='900 600 990 450 810 450'/><polygon fill='#DDD' points='0 900 90 750 -90 750'/><polygon fill='#444' points='180 900 270 750 90 750'/><polygon fill='#FFF' points='360 900 450 750 270 750'/><polygon fill='#AAA' points='540 900 630 750 450 750'/><polygon fill='#FFF' points='720 900 810 750 630 750'/><polygon fill='#222' points='900 900 990 750 810 750'/><polygon fill='#222' points='1080 300 990 450 1170 450'/><polygon fill='#FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='#666' points='1080 600 1170 450 990 450'/><polygon fill='#DDD' points='1080 900 1170 750 990 750'/></g></svg>
      <section className='relative bg-[RGB(95,207,194)] px-5'>
        <div className='container grid grid-cols-12  mx-auto py-10 md:pb-20 lg:place-items-center'>
        <div className='col-span-12 lg:col-span-6'>
            <h2 className='text-white font-bold text-2xl md:text-center lg:text-left'> Wanna Catch Our Latest Updates And Insights? Subscribe to Our Weekly Newsletter </h2>
            <div className='w-full max-w-[494px] mt-12 space-y-4 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0'>
            <input type='text' className='focus:outline-none none px-4 py-3 rounded-lg w-full placeholder:text-black/80' placeholder='admin@byteplay.com' />
            <button className='text-white px-4 py-3 rounded-lg w-full bg-teal-700 animate-bounce md:animate-none md:w-fit md:whitespace-nowrap'>Subscribe</button>
            </div>
            
                <p className='text-black/80 text-sm w-full px-4 py-3 mt-3 leading-7 md:text-center md:text-base lg:text-left'>
                <span className='text-gray-200 font-semibold italic'> We'll be in touch </span> 
                </p>
            </div>
            <div className='hidden col-span-12 mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last'>
            <div className='w-3/4 mx-auto relative'>
            <div className='w-1/2 h-1/2 bg-black/50 opacity-[.5] rounded-lg absolute -top-[10%] right-[-8%]'/>
            <div className='w-1/2 h-1/2 bg-white opacity-[.3] absolute -bottom-[10%] -left-[8%] rounded-lg'/>

            <div className="w-full bg-white relative p-3 z-[1] rounded-xl">
            <img src={images.CtaImage} alt="cta" className='mx-auto w-1/2 h-1/2 object-cover object-center'/>
            <div className='px-5 mb-4 text-center'>
            <h2 className='font-bold text-xl text-black md:text-2xl lg:text-[28px]'>
            Ideas Before Coding
             </h2>
            <p className='text-black/70 mt-3 text-sm md:text-lg'>
            Getting your ideas right will guarantee fun while coding...
            </p>
      
            </div>  
            </div>
            </div>
            
            </div>
        </div>
        
      </section>

    </>
  )
}

export default CTA
