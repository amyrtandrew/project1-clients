import React from 'react'
import NameCell from './NameCell'
import WeightCell from './WeightCell'
import HeightCell from './HeightCell'
import BMICell from './BMICell'
import BMIClassCell from './BMIClassCell'
import NotesCell from './NotesCell'
import './SingleClientTable.css'
import ModeButtons from './ModeButtons'


const SingleClientTable = () => {
  return (
    <>
<tr>
    <td>
        <table className="ClientCell">
            <tbody>
                <ModeButtons/>
                <NameCell/>
                <WeightCell/>
                <HeightCell/>
                <BMICell/>
                <BMIClassCell/>
                <NotesCell/>
            </tbody>
        </table>
    </td>
</tr>
    
    </>
  )
}

export default SingleClientTable