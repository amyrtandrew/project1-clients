import React from 'react'
import TableHeader from './TableHeader'
import SingleClientTable from './SingleClientTable'
import AddButton from './AddButton'
import { useState } from 'react'
import ModeButtons from './ModeButtons'


const AllClientsTable = ({ startingData }) => {

    const [currentData, setCurrentData] = useState(startingData)

    const client = startingData.map((clientInfo) => {
        const { name, weight, height, notes } = clientInfo
        const isEditing = clientInfo.isEditing

        return (
           <SingleClientTable
                key={name}
                startingData={{ name, weight, height, notes}}
                isEditing={isEditing}
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
