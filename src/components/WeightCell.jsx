import React from 'react'

const WeightCell = ({ isEditing, value }) => {
  return isEditing ? (
    <tr>
        <td>
            <label htmlFor='weight'>Weight: </label>
            <input
                type='text'
                id='weight'
                value={value}
                onChange={(e) =>onValueChange(e.target.value)}
            />
        </td>
    </tr>
  ) : (
    <tr>
      <td>
        Weight: {value}lbs
      </td>
    </tr>
  )
}

export default WeightCell

