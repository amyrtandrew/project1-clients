import React from 'react'
import NameCell from './NameCell'
import WeightCell from './WeightCell'
import HeightCell from './HeightCell'
import BMICell from './BMICell'
import BMIClassCell from './BMIClassCell'
import NotesCell from './NotesCell'
import './SingleClientTable.css'
import ModeButtons from './ModeButtons'




const SingleClientTable = ({ isEditing, startingData }) => {

   

const { name, weight, height, notes } = startingData

  return (
    <>
<tr>
    <td>
        <table className="ClientCell">
            <tbody>
                {/* below we are giving each component props (isEditing and value) */}
                <ModeButtons 
                    isEditing={isEditing}  
                />
                <NameCell 
                    isEditing={isEditing} 
                    value={name}
                />
                <WeightCell  
                    isEditing={isEditing} 
                    value={weight}
                />
                <HeightCell 
                    isEditing={isEditing} 
                    value={height}
                />
                <tr><td>BMI: {BMICell(weight, height)} </td></tr>
                <tr><td>BMI Class: {BMIClassCell(BMICell(weight, height))}</td></tr>
                <NotesCell 
                    isEditing={isEditing} 
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