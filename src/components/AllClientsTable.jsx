import React from 'react'
import TableHeader from './TableHeader'
import SingleClientTable from './SingleClientTable'
import AddButton from './AddButton'
import { useState } from 'react'
import ModeButtons from './ModeButtons'
import createClient from '../docs/clientCreator.js'
import axios from 'axios'

// let globalId = 4
const AllClientsTable = ({ startingData }) => {
    const [currentData, setCurrentData] = useState(startingData)
    const client = currentData.map((clientInfo) => {
        const { clientNum, name, weight, height, notes } = clientInfo
        const isEditing = clientInfo.isEditing

        return (
           <SingleClientTable
                id={clientNum}
                key={clientNum}
                startingData={{ name, weight, height, notes}}
                isEditing={isEditing}
                deleteFunc={() => deleteClient(clientNum)}
                />
                
        )
    })
    const addClient = async () => {

        const response = await axios.post('/addClients', { name: 'Name here' })
        setCurrentData([...currentData, response.data])
        // const basicData = {
        //     clientNum: createClient(),
        //     name: 'Name',
        //     height: '',
        //     weight: '',
        //     notes: '',
        //     isEditing: true,
        }
        // newClient.push(basicData)
        // setCurrentData(newClient)
    const deleteClient = async (itemId) => {

        const response = await axios.delete(`/deleteClients/${itemId}`)
        if (!response.data.error) {
           const filteredClient = currentData.filter((clientInfo) => clientInfo.clientNum !== itemId)
            setCurrentData(filteredClient)
        }

        // const newClient = [...currentData]
        // const index = newClient.findIndex((num) => num.clientNum === clientNum)
        // newClient.splice(index, 1)
        // setCurrentData(newClient)
    }
   
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
                <AddButton addClick={addClient}/>
            </tfoot>
        </table>
    </div>
  )
}
export default AllClientsTable
