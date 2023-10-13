import React from 'react'

const WeightCell = () => {
  return (
    <tr>
        <td>
            <label htmlFor='weight'>Weight: </label>
            <input
                type='text'
                id='weight'
            />
        </td>
    </tr>
  )
}

export default WeightCell

