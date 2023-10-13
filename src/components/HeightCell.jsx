import React from 'react'

const HeightCell = () => {
  return (
    <tr>
        <td>
            <label htmlFor='height'>Height:</label>
            <input
                type='text'
                id='height'
            />
        </td>
    </tr>
  )
}

export default HeightCell