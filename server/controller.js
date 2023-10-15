
let STARTER_DATA = [
    {clientNum: 0, name: 'Sarah', weight: 150, height: 66, notes: 'Increase protein to 1.2g/kg/day'},
    {clientNum: 1, name: 'Jack', weight: 220, height: 68, notes: 'Lactose intolerant/at risk for osteoporosis'},
    {clientNum: 2, name: 'Jordan', weight: 180, height: 72, notes: 'Increase fiber intake to 30mg/day'},
    {clientNum: 3, name: 'Brit', weight: 105, height: 60, notes: 'Family history of heart disease'}
  ]

  let globalId = 4
  const handlerFunctions = {
    getClients: (req, res) => {
        res.send(STARTER_DATA)
    },
    addClients: (req, res) => {
        const { name, weight, height, notes } = req.body
        
        const newObj = {
            clientNum: globalId,
            name: name,
            weight: 0,
            height: 0,
            notes: notes,
        }

        STARTER_DATA.push(newObj)

        globalId++

        res.send(newObj)
    },

    deleteClients: (req, res) => {
        const clientNum = req.params.clientNum

        STARTER_DATA = STARTER_DATA.filter((person) => person.clientNum !== +clientNum)
        res.send(STARTER_DATA)
    },

    editClients: (req, res) => {
        const { clientNum } = req.params
        const { name, weight, height, notes } = req.body

        const index = STARTER_DATA.findIndex((person) => person.clientNum === +clientNum)
        const clientInfo = STARTER_DATA[index]

        clientInfo.name = name
        clientInfo.weight = +weight
        clientInfo.height = +height
        clientInfo.notes = notes

        res.send(clientInfo)
    },

  }

  export default handlerFunctions