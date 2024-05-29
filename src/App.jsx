import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
