import { useState } from 'react'
import './App.css'
import AllClientsTable from './components/AllClientsTable'
import NameCell from './components/NameCell'
import WeightCell from './components/WeightCell'
import HeightCell from './components/HeightCell'
import NotesCell from './components/NotesCell'


const STARTER_DATA = [
  {name: 'Sarah', weight: 150, height: 66, notes: 'Increase protein to 1.2g/kg/day'},
  {name: 'Jack', weight: 220, height: 68, notes: 'Lactose intolerant/at risk for osteoporosis'},
  {name: 'Jordan', weight: 180, height: 72, notes: 'Increase fiber intake to 30mg/day'},
  {name: 'Brit', weight: 105, height: 60, notes: 'Family history of heart disease'}
]
function App() {
  return (
    <>
    <AllClientsTable startingData={STARTER_DATA}/>
    </>
  )
    
}

export default App
