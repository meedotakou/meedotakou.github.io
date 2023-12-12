import React from 'react'
import './InfoAbout.css'
import MeImage from './../../assests/Me.png'
export const InfoAbout = () => {
  return (
    <div className='container'>
        <div className='InfoAbout'>
            <div className='imageAbout'>
                <img src={MeImage} alt="Mohammed Mekkaoui" />
            </div>
            <div className='AboutMeText'>
                <h1>I'm  <span>Mohamed OTAKOUCHT. </span>  I'm <span>25 years</span>  old.</h1>
                <p>  I'm passionate about technology and the world of IT, especially programming. So, I try to improve myself every day in this area </p>
            </div>
            <div className='ButtonCv'>
                <a href='MyResume.pdf' download>Download CV</a>
            </div>
        </div>
    </div>
  )
}
