// import { useState } from 'react'
import './App.css'
import FastAction from './components/FastAction'
import Personal from './components/personal/Personal'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'

function App() {

  return (
    <>
      <sidebar className='sidebar'>
        <div className='content'>
          <div>Content</div>
        </div>
        <FastAction />
        <Personal />
        <Education />
        <Experience />
      </sidebar>
      <section></section>
    </>
  )
}

export default App
