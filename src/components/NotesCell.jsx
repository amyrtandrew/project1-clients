import React from 'react'

const NotesCell = () => {
  return (
    <tr>
        <td>
            <label htmlFor='notes'>Notes:</label>
            <input
                type='text'
                id='notes'
            />
        </td>
    </tr>
  )
}

export default NotesCell