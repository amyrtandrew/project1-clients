import React from 'react'

const ModeButtons = ({ isEditing, saveClick, editClick, deleteClick }) => {
  return isEditing ? (
  <tr>
    <td>
        <button onClick={saveClick}>Save</button>
        <button onClick={deleteClick}>Delete Client</button>
    </td>
  </tr>
  ) : (
  <tr>
    <td>
        <button id='editButton' onClick={editClick}>Edit</button>
    </td>
    </tr>
  )
}

export default ModeButtons