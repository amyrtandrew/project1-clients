import React from 'react'

const ModeButtons = ({ isEditing }) => {
  return isEditing ? (
    <td>
        <button>Save</button>
        <button>Delete Client</button>
    </td>
  ) : (
    <td>
        <button>Edit</button>
    </td>
  )
}

export default ModeButtons