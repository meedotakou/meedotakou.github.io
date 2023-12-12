import React from 'react'
import './ContactInfo.css'
import Phone from './../../assests/icon-phone.png'
import Email from './../../assests/icon-email.png'
import Name from './../../assests/icon-name.png'
import Position from './../../assests/icon-location.png'

export const ContactInfo = () => {
  return (
    <div className='ContactInfo'>
        <h1>Contact Info</h1>
            <div className='itemInfo'>
                <div className='itemI'>
                    <div className='image'>
                        <img src={Name} alt='Name' />
                    </div>
                    <div>
                        <h4>Name</h4>
                        <span>Mohamed OTAKOUCHT</span>
                    </div>
                </div>
                <div className='itemI'>
                    <div className='image'>
                        <img src={Position} alt='Name' />
                    </div>
                    <div>
                        <h4>Location</h4>
                        <span>Agadir, Morocco</span>
                    </div>
                </div>
                <div className='itemI'>
                    <div className='image'>
                        <img src={Phone} alt='Name' />
                    </div>
                    <div>
                        <h4>Call</h4>
                        <span>+212 618 16 75 70</span>
                    </div>
                </div>
                <div className='itemI'>
                    <div className='image'>
                        <img src={Email} alt='Name' />
                    </div>
                    <div>
                        <h4>Email</h4>
                        <span>mohamedotakoucht@gmail.com</span>
                    </div>
                </div>
            </div>
    </div>
  )
}
