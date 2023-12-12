import React from 'react'
import { HeaderContact } from '../Components/contact/HeaderContact'
import './Contact.css'
import { ContactForm } from '../Components/contact/ContactForm'
import { ContactInfo } from '../Components/contact/ContactInfo'

export const Contact = () => {
  return (
    <div id="contact">
        <HeaderContact/>
        <div className='contactFields'>
          <ContactForm />
          <ContactInfo />
        </div>
    </div>
  )
}
