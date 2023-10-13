import React from 'react'

const NameCell = () => {
  return (
    <tr>
        <td>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id='name'
            />
        </td>
    </tr>
  )
}

export default NameCell