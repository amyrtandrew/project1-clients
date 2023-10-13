import React from 'react'
import NameCell from './NameCell'
import WeightCell from './WeightCell'
import HeightCell from './HeightCell'
import NotesCell from './NotesCell'

const ModeButtons = ({ isEditing, saveClick, editClick }) => {
  return isEditing ? (
  <tr>
    <td>
        <button onClick={saveClick}>Save</button>
        <button>Delete Client</button>
    </td>
  </tr>
  ) : (
  <tr>
    <td>
        <button onClick={editClick}>Edit</button>
    </td>
    </tr>
  )
}

export default ModeButtons