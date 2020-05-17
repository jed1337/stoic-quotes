import React from 'react'
import stoicApi from 'stoic-api'
import styles from './App.module.css'

class App extends React.Component {
    state = {
        quote:''
    }

    componentDidMount() {
        this.getQuote()
    }

    getQuote = () =>{
        this.setState({quote: stoicApi.random()})
    }

    render() {
        return (
            <div>
                <div className={styles.quote}>
                    {this.state.quote}
                </div>
                <div>
                    <button onClick={this.getQuote}>New quote</button>
                </div>
            </div>
        )
    }
}

export default App