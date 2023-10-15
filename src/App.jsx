import { useState } from 'react'
import './App.css'
import AllClientsTable from './components/AllClientsTable'
import NameCell from './components/NameCell'
import WeightCell from './components/WeightCell'
import HeightCell from './components/HeightCell'
import NotesCell from './components/NotesCell'



function App( { startingData }) {
  return (
    <>
    <AllClientsTable startingData={startingData}/>
    </>
  )
    
}

export default App
