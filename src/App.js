import React, { useState, useEffect } from 'react'
import personApi from './api/personApi'
import XMLParser from 'react-xml-parser'
import { sortBy } from 'lodash'

import PersonCard from './components/PersonCard'
import './App.css'

function App() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    const xmlToJson = (xml) => {
      return xml.children.map(person => {
        let p = {}

        person.children.forEach(c => {
          if (c.name === 'id') {
            p.id = parseInt(c.value)
          } else {
            p[c.name] = c.value
          }
        })

        return p
      })
    }
    
    const getJSONData = () => {
      personApi.getJSONData().then(res => {
        setPersons(persons => [...persons, ...res.person])
      }).catch(() => {})
    }

    const getXMLData = () => {
      personApi.getXMLData().then(res => {
        const xml = new XMLParser().parseFromString(res)
        const newPersons = xmlToJson(xml)

        setPersons(persons => [...persons, ...newPersons])
      }).catch(() => {})
    }

    getJSONData()
    getXMLData()
  }, [])

  return (
    <div className="App">
      {persons.length ? sortBy(persons, ['id']).map((person, index) => (
        <PersonCard person={person} key={index} />
      )) : (
        <div>Loading data...</div>
      )}
    </div>
  );
}

export default App;
