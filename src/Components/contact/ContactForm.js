import React from 'react'
import './ContactForm.css'
export const ContactForm = () => {


  return (
    <div className='Form'>
          <h1 className='titleContacts'>Message Me</h1>
            <form action="https://formsubmit.co/mohamedotakoucht@gmail.com" method="POST">
                <input type='text' name='Name'  placeholder='Name' required />
                <input type='email' name='Email'  placeholder='Email' required/>
                <input type='text' name='Subject'  placeholder='Subject' required/>
                <textarea placeholder='Message' rows="4" cols="50"  required/>
                <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
