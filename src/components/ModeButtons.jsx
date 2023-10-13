import React from 'react'
import NameCell from './NameCell'
import WeightCell from './WeightCell'
import HeightCell from './HeightCell'
import NotesCell from './NotesCell'

const ModeButtons = ({ isEditing }) => {
  return isEditing ? (
  <tr>
    <td>
        <button>Save</button>
        <button>Delete Client</button>
    </td>
  </tr>
  ) : (
  <tr>
    <td>
        <button>Edit</button>
    </td>
    </tr>
  )
}

export default ModeButtons