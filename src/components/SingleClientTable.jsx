import React from 'react'
import NameCell from './NameCell'
import WeightCell from './WeightCell'
import HeightCell from './HeightCell'
import BMICell from './BMICell'
import BMIClassCell from './BMIClassCell'
import NotesCell from './NotesCell'
import './AllClientsTable.css'
import ModeButtons from './ModeButtons'
import { useState } from 'react'
import axios from 'axios'




const SingleClientTable = ({ isEditing, startingData, deleteFunc, clientNum }) => {

    const [editMode, setEditMode] = useState(isEditing)
    const [name, setName] = useState(startingData.name)
    const [weight, setWeight] = useState(startingData.weight)
    const [height, setHeight] = useState(startingData.height)
    const [notes, setNotes] = useState(startingData.notes)

    const normalMode = async () => {
        let obj = {
            name: name,
            weight: weight,
            height: height,
            notes: notes,
        }
    const response = await axios.put(`/editClients/${clientNum}`, obj)

    if (!response.data.error) {
        setEditMode(false)
    } else {
        console.log('idk what is going on')
    }
}

    const changeMode = () => setEditMode(true)

  return (
    <>
<tr>
    <td>
        <table className="ClientCell">
            <tbody>
                <ModeButtons 
                    isEditing={editMode}  
                    editClick={changeMode}
                    saveClick={normalMode}
                    deleteClick={deleteFunc}
                />
                <NameCell 
                    isEditing={editMode} 
                    value={name}
                    onValueChange={setName}
                />
                <WeightCell  
                    isEditing={editMode} 
                    value={weight}
                    onValueChange={setWeight}
                />
                <HeightCell 
                    isEditing={editMode} 
                    value={height}
                    onValueChange={setHeight}
                />
                <tr><td>BMI: {BMICell(weight, height)} </td></tr>
                <tr><td>BMI Class: {BMIClassCell(BMICell(weight, height))}</td></tr>
                <NotesCell 
                    isEditing={editMode} 
                    value={notes}
                    onValueChange={setNotes}
                />
                
            </tbody>
        </table>
    </td>
</tr>
    
    </>
  )
}

export default SingleClientTable