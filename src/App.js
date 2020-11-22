import React, { useEffect, useState } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Nav from './components/Nav'
import Body from './components/Body'
import workerService from './services/workers'

const App = () => {

    const [workers, setWorkers] = useState([])

    useEffect(
        workerService
            .getAll
            .then(newWorkers => setWorkers(newWorkers))
    )

    console.log(workers)


    return (
        < div >
            <Nav />
        </div >
    )
}


export default App