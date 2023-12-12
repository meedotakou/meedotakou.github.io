import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import './info.css'
export const Info = () => {
  return (
    <div className='NameInfoSection'>
        <div>
            <h1 className='FullName'><span className='name'>Mohamed</span> OTAKOUCHT</h1>
            <h5><strong>I'm </strong>     
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    '',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'a full-stack developer',
                    1000,
             
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block',color:"var(--secound-color)" }}
                repeat={Infinity}
                /></h5>
        </div>
    </div>
  )
}
