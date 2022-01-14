import React from 'react'

//grid used for showing the 3 main windows
import {Grid} from '@material-ui/core'
import Details from './components/Details/Details'
import Main from './components/Main/Main'


import useStyles from './styles'

const App = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid className={classes.grid}
            container 
            spacing={0} 
            alignItems="center" 
            justify="center" 
            style={{height: '100vh'}}> 
                <Grid item xs={12} sm={4}> {/*determine size of display*/}
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={3}> {/*determine size of display*/}
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}> {/*determine size of display*/}
                    <Details title="Expense"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
