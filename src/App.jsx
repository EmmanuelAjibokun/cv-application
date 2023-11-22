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
  const [newEducation, setNewEducation] = useState([
    {
      id: 0,
      school: "FUTA",
      degree: "Applied Geology",
      startdate: "17/02/2019",
      enddate: "present",
      location: "Akure, Nigeria",
      display: false
    },
    {
      id: 1,
      school: "UNILAG",
      degree: "Applied Geophysics",
      startdate: "17/02/2019",
      enddate: "present",
      location: "Lagos, Nigeria",
      display: false
    }
  ])

  // Experience states
  const [company, setCompany] = useState("OODT")
  const [position, setPosition] = useState("Interning Student")
  const [startdate2, setStartdate2] = useState("17/02/2019")
  const [enddate2, setEnddate2] = useState("present")
  const [location2, setLocation2] = useState("Akure, Nigeria")
  const [description, setDescription] = useState("Data Scientist and Machine Learning Engineer")

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
          vals={newEducation} 
          setVals={setNewEducation} 
          />
        <Experience
          val={{company, position, startdate2, enddate2, location2, description}}
          setVal={{setCompany, setPosition, setStartdate2, setEnddate2, setLocation2, setDescription}} />
      </sidebar>
      <sections className="cv">
        <Template 
          val={{person, mail, num, addr}} 
          educationVal={newEducation} 
          experienceVal={{company, position, startdate2, enddate2, location2, description}} 
          />
      </sections>
    </div>
  )
}

export default App
