import './App.css'
import FastAction from './components/FastAction'
import Personal from './components/personal/Personal'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Template from './components/template/Template'

import { useState } from 'react'

function App() {
  // Personal component states
  const [person, setPerson] = useState("Emmanuel Ajibokun")
  const [mail, setMail] = useState("Emmanuelajibokunedu@gmail.com")
  const [num, setNum] = useState("+234901234567")
  const [addr, setAddr] = useState("Lagos, Nigeria")

  // Education states
  const [school, setSchool] = useState("FUTA")
  const [degree, setDegree] = useState("Applied Geology")
  const [startdate, setStartdate] = useState("17/02/2019")
  const [enddate, setEnddate] = useState("present")
  const [location, setLocation] = useState("Akure, Nigeria")

  // Experience states

  return (
    <div className='app'>
      <sidebar className='sidebar'>
        <div className='content'>
          <div>Content</div>
        </div>
        <FastAction />
        <Personal 
          val={{person, mail, num, addr}} 
          setVal={{setPerson, setMail, setNum, setAddr}} 
          />
        <Education 
          val={{school, degree, startdate, enddate, location}} 
          setVal={{setSchool, setDegree, setStartdate, setEnddate, setLocation}} 
          />
        <Experience />
      </sidebar>
      <sections className="cv">
        <Template val={{person, mail, num, addr}} />
      </sections>
    </div>
  )
}

export default App
