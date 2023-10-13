import React from 'react'

const NameCell = ({ isEditing, value }) => {
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
      <td>
        {value}
      </td>
    </tr>
  )
}

export default NameCell