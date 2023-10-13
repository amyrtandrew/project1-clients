import React from 'react'
import TableHeader from './TableHeader'
import SingleClientTable from './SingleClientTable'
import AddButton from './AddButton'


const AllClientsTable = ({ startingData }) => {

    const client = startingData.map((clientInfo) => {
        const { name, weight, height, notes } = clientInfo
        const idEditing = clientInfo.isEditing

        return (
           <SingleClientTable
                key={name}
                startingData={{ name, weight, height, notes}}
                isEditing={false}
                />
                
        )
    })
        
   
  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>

            <tbody>
                {client}
            </tbody>

            <tfoot>
                <AddButton />
            </tfoot>
        </table>
    </div>
  )
}
export default AllClientsTable
