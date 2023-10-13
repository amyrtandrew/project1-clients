import React from 'react'

const BMIClassCell = () => {
  return (
    <tr>
        <td>
            <label htmlFor='BMIClass'>BMI Class: </label>
            <input
                type='text'
                id='BMIClass'
            />
        </td>
    </tr>
  )
}

export default BMIClassCell