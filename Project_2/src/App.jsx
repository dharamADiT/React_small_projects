import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/contactForm/ContactForm'

const App = () => {
  return (
    <div className='px-20 py-4'>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App