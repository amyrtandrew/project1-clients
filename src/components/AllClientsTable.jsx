import React from 'react'
import TableHeader from './TableHeader'
import SingleClientTable from './SingleClientTable'
import AddButton from './AddButton'


const AllClientsTable = () => {
  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>

            <tbody>
                <SingleClientTable/>
            </tbody>

            <tfoot>
                <AddButton />
            </tfoot>
        </table>
    </div>
  )
}

export default AllClientsTable
