import React from 'react'

const BMICell = () => {
  return (
    <tr>
        <td>
            <label htmlFor='BMI'>BMI: </label>
            <input
                type='text'
                id='BMI'
            />
        </td>
    </tr>
  )
}

export default BMICell