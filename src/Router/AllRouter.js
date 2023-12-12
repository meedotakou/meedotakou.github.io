import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Pages/Main'
import { About } from '../Pages/About'
import { Portfolio } from '../Pages/Portfolio'
import { Contact } from '../Pages/Contact'

export const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/Contact" element={<Contact/>}/>

        </Routes>
    </div>
  )
}
