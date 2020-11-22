import React, { useEffect, useState } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Nav from './components/Nav'
import Body from './components/Body'
import workerService from './services/workers'
import { Columns, Container } from 'react-bulma-components';

const App = () => {


    const [workers, setWorkers] = useState([])

    useEffect(() => {
        workerService
            .getAll()
            .then(response => setWorkers(response))
    }
        , [])


    return (
        < div >
            <Nav />

            <br />

            <Container >
                <Columns>
                    {workers.map(
                        worker => <Body key={worker.number} workers={worker} />
                    )}
                </Columns>
            </Container>


        </div >
    )
}


export default App