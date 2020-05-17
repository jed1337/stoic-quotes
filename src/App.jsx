import React from 'react'
import stoicApi from 'stoic-api'
import styles from './App.module.css'
import QuoteBox from "./components/QuoteBox/QuoteBox";

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
                <QuoteBox quote={this.state.quote}/>
                <div>
                    <button onClick={this.getQuote}>New quote</button>
                </div>
            </div>
        )
    }
}

export default App