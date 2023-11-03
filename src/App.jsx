// import { useState } from 'react'
import './App.css'
import FastAction from './components/FastAction'
import Personal from './components/personal/Personal'
import Education from './components/education/Education'

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
      </sidebar>
      <section></section>
    </>
  )
}

export default App
