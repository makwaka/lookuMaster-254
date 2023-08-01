import React from 'react'
import { Icon } from '@iconify/react';


function footer() {
  return (
    <div>
  <article className='footer'>
    <div className='socials'>
    <h5>Our Socials </h5>
    <div className='icons'>
      <a href='#'>
    <Icon icon="logos:facebook" style={{fontSize : "1.5rem"}} />
      </a>
      <a href='#'>
    <Icon icon="skill-icons:instagram" style={{fontSize : "1.5rem"}} />
      </a>
      <a href='#'>
    <Icon icon="skill-icons:twitter" style={{fontSize : "1.5rem"}}/>
      </a>
      <a href='#'>
    <Icon icon="logos:tiktok-icon" style={{fontSize : "1.2rem"}} />
      </a>
    </div>
    </div>
     <div className='contacts'>
    <h5>Reach Us Directly On: </h5>
    <div className='contact-info'>
  <a  href='tel: O706822662'>O706822662</a> <p> OR </p>
    <a  href='tel: O775858585'>O775858585</a>
    </div>
    </div>
  </article>
    <div className='developer'>
       <a href='mailto: pharisnjuguna22@gmail.com'><p className='web-by'>Website by fariq</p></a>
    </div>
    </div>
  )
}

export default footer