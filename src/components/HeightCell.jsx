import React from 'react'

const HeightCell = ({ isEditing, value }) => {
  return isEditing ? (
    <tr>
        <td>
            <label htmlFor='height'>Height:</label>
            <input
                type='text'
                id='height'
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
    </tr>
  ) : (
    <tr>
      <td>
        Height: {value}in
      </td>
    </tr>
  )
}

export default HeightCell