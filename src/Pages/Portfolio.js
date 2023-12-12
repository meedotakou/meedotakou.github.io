import React from 'react'
import './Portfolio.css'
import { HeaderPortoflio } from '../Components/Portfolio/HeaderPortoflio'
import { MyProject } from '../Components/Portfolio/MyProject'

export const Portfolio = () => {
  return (
    <div id="Portfolio">
        <HeaderPortoflio />
        <MyProject />
    </div>
  )
}
