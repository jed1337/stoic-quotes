import React from 'react'
import stoicApi from 'stoic-api'
import styles from './App.module.css'
import {Button, Container, Typography} from '@material-ui/core'
import CustomAppBar from "./components/CustomAppBar/CustomAppBar"
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
        const [quoteText, author] = this.state.quote.split(/[-―]/)
        return (
            <div>
                <CustomAppBar/>
                <Container className={styles.main}>
                    <Typography variant={'h5'}>{quoteText}</Typography>
                    <Typography variant={'h6'}>{author}</Typography>
                    <Button onClick={this.getQuote}>New quote</Button>
                </Container>
            </div>
        )
    }
}

export default App