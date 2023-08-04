import React from 'react';
import { FaFacebookSquare,FaTwitterSquare,FaRedditSquare,FaWhatsappSquare } from 'react-icons/fa';


const SocialShareButtons = ({url, title}) => {
  return (
    <div className='max-w-xs flex justify-between'>
      <a target="_blank" href={`https://www.facebook.com/dialog/share?app_id=11802069928656877&display=popup&href=${url}`}
       rel="noreferrer">
        <FaFacebookSquare className='text-[#3b5998] w-12 h-auto'/>
      </a>
      <a target="_blank" href={`https://twitter.com/intent/tweet?url=${url}`}
       rel="noreferrer">
        <FaTwitterSquare className='text-[#00acee] w-12 h-auto'/>
      </a>
      <a target="_blank" href={`http://www.reddit.com/submit?url=${url}&title=${title}`} 
      rel="noreferrer">
        <FaRedditSquare className='text-[#ff4500] w-12 h-auto'/>
      </a>
      <a target="_blank" href={`https://api.whatsapp.com/send/?text=${url}`} 
      rel="noreferrer">
        <FaWhatsappSquare className='text-[#25D366] w-12 h-auto'/>
      </a>
    </div>
  )
}

export default SocialShareButtons
