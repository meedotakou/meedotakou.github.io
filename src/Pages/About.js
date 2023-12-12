import React from 'react'
import './About.css'
import { HeaderAbout } from '../Components/About/HeaderAbout'
import { InfoAbout } from '../Components/About/InfoAbout'
import { MySkills } from '../Components/About/MySkills'

export const About = () => {
  return (
    <div id="About" >
      <HeaderAbout />
      <InfoAbout />
      <MySkills />
    </div>
  )
}
