import React from 'react'
import Bio from './components/Bio'
import ContactForm from './components/ContactForm'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased '>
    <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'>
    </div>
    <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>

      <Hero/>
      <Navbar/>
      <Project/>
      <Bio/>
      <Skills/>
      <WorkExperience/>
      <Education/>
      <ContactForm/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
