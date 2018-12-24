import React, { Component } from 'react'
import Airbar from './Components/Airbar'
import './styles/sass/main.scss'

class App extends Component {
    render() {
        return(
            <div>
                <h1> Brooklyn Standard </h1>
                <Airbar />
            </div>
        )
    }
}

export default App;