import React from 'react'
import './skil.css'
export const Skill = ({skil,perc}) => {
    
    const MyStyle = {
        width:perc,

    }

  return (
    <div className='skil' >
        <h4>{skil}</h4>
        <div className='progress'>
            <span style={MyStyle}>{perc}</span>
        </div>
    </div>
  )
}
