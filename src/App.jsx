import React from 'react'
import stoicApi from 'stoic-api'

class App extends React.Component{
    render() {
        return (
            <div>{stoicApi.random()}</div>
        )
    }
}

export default App