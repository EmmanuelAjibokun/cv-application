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
      id: 1,
      school: "FUTA",
      degree: "Applied Geology",
      startdate: "17/02/2019",
      enddate: "present",
      location: "Akure, Nigeria",
      display: false
    },
    {
      id: 2,
      school: "UNILAG",
      degree: "Applied Geophysics",
      startdate: "17/02/2019",
      enddate: "present",
      location: "Lagos, Nigeria",
      display: false
    }
  ])
  
  const [newExperience, setNewExperience] = useState([
    {
      id: 1,
      company: "OODT",
      position: "Interning Student",
      startdate: "17/02/2019",
      enddate: "present",
      location: "Akure, Nigeria",
      description: "Data Scientist and Machine Learning Engineer",
      display: false
    }
  ])


  return (
    <div className='app'>
      <sidebar className='sidebar'>
        <div className='content'>
          <div>Content</div>
        </div>
        <FastAction
          setVal={{setPerson, setMail, setNum, setAddr}}
          setEducationVal={setNewEducation}
          setExperienceVal={setNewExperience}
         />
        <Personal 
          val={{person, mail, num, addr}} 
          setVal={{setPerson, setMail, setNum, setAddr}} 
          />
        <Education 
          vals={newEducation} 
          setVals={setNewEducation} 
          />
        <Experience
          vals={newExperience}
          setVals={setNewExperience} />
      </sidebar>
      <sections className="cv">
        <Template 
          val={{person, mail, num, addr}} 
          educationVal={newEducation} 
          experienceVal={newExperience}
          />
      </sections>
    </div>
  )
}

export default App
