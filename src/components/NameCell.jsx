import React from 'react'

const NameCell = ({ isEditing, value, onValueChange }) => {
  return isEditing ? (
    <tr>
        <td>
            <input
                type='text'
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
    </tr>
  ) : (
    <tr>
      <td id='nameCell'>
        {value}
      </td>
    </tr>
  )
}

export default NameCell