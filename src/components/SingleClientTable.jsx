import React from 'react'
import NameCell from './NameCell'
import WeightCell from './WeightCell'
import HeightCell from './HeightCell'
import BMICell from './BMICell'
import BMIClassCell from './BMIClassCell'
import NotesCell from './NotesCell'
import './SingleClientTable.css'
import ModeButtons from './ModeButtons'
import { useState } from 'react'




const SingleClientTable = ({ isEditing, startingData }) => {

    const [editMode, setEditMode] = useState(isEditing)
    const [name, setName] = useState(startingData.name)
    const [weight, setWeight] = useState(startingData.weight)
    const [height, setHeight] = useState(startingData.height)
    const [notes, setNotes] = useState(startingData.notes)

    const setEditing = () => setEditMode(true)
    const setNotEditing = () => setEditMode(false)

  return (
    <>
<tr>
    <td>
        <table className="ClientCell">
            <tbody>
                {/* below we are giving each component props (isEditing and value) */}
                <ModeButtons 
                    isEditing={editMode}  
                    editClick={setEditing}
                    saveClick={setNotEditing}
                />
                <NameCell 
                    isEditing={editMode} 
                    value={name}
                />
                <WeightCell  
                    isEditing={editMode} 
                    value={weight}
                />
                <HeightCell 
                    isEditing={editMode} 
                    value={height}
                />
                <tr><td>BMI: {BMICell(weight, height)} </td></tr>
                <tr><td>BMI Class: {BMIClassCell(BMICell(weight, height))}</td></tr>
                <NotesCell 
                    isEditing={editMode} 
                    value={notes}
                />
                
            </tbody>
        </table>
    </td>
</tr>
    
    </>
  )
}

export default SingleClientTable