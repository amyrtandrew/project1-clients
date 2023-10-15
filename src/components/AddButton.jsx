import React from 'react'

const AddButton = ({ addClick }) => {
  return (
    <tr>
        <td>
            <button onClick={addClick}>Add Client</button>
        </td>
    </tr>
  )
}

export default AddButton