import React from 'react'
import stoicApi from 'stoic-api'
import styles from './App.module.css'
import QuoteBox from "./components/QuoteBox/QuoteBox";
import {Button, Container, Typography} from '@material-ui/core'
import 'typeface-roboto'

class App extends React.Component {
    state = {
        quote: ''
    }

    componentDidMount() {
        this.getQuote()
    }

    getQuote = () => {
        this.setState({quote: stoicApi.random()})
    }

    render() {
        return (
            <Container color={'Text primary'}>
                <QuoteBox quote={this.state.quote}/>
                <div>
                    <Typography color={'primary'}>
                        <Button onClick={this.getQuote}>New quote</Button>
                    </Typography>
                </div>
            </Container>
        )
    }
}

export default App