import React from 'react'

const NotesCell = ({ isEditing, value }) => {
  return isEditing ? (
    <tr>
        <td>
            <label htmlFor='notes'>Notes:</label>
            <input
                type='text'
                id='notes'
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
    </tr>
  ) : (
    <tr>
      <td>
        Notes: {value}
      </td>
    </tr>
  )
}

export default NotesCell