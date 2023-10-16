

const AddButton = ({ addClick }) => {
  return (
    <tr>
        <td>
            <button id='addButton' onClick={addClick} >Add Client</button>
        </td>
    </tr>
  )
}

export default AddButton