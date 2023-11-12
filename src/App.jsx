// import { useState } from 'react'
import './App.css'
import FastAction from './components/FastAction'
import Personal from './components/personal/Personal'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Template from './components/template'

import { useState } from 'react'

function App() {
  const [person, setPerson] = useState("Emmanuel Ajibokun")
  const [mail, setMail] = useState("Emmanuelajibokunedu@gmail.com")
  const [num, setNum] = useState("+234901234567")
  const [addr, setAddr] = useState("Lagos, Nigeria")

  return (
    <div style={{display: 'flex'}}>
      <sidebar className='sidebar'>
        <div className='content'>
          <div>Content</div>
        </div>
        <FastAction />
        <Personal val={{person, mail, num, addr}} setVal={{setPerson, setMail, setNum, setAddr}} />
        <Education />
        <Experience />
      </sidebar>
      <sections className="cv">
        <Template val={{person, mail, num, addr}} />
      </sections>
    </div>
  )
}

export default App
