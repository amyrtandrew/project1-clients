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
                {/* below we are giving each component props (isEditing and value) */}
                <ModeButtons isEditing={false}/>
                <NameCell isEditing={false} value="Jackie"/>
                <WeightCell  isEditing={false} value={155}/>
                <HeightCell isEditing={false} value={68}/>
                <BMICell/>
                <BMIClassCell/>
                <NotesCell isEditing={false} value="noties"/>
            </tbody>
        </table>
    </td>
</tr>
    
    </>
  )
}

export default SingleClientTable