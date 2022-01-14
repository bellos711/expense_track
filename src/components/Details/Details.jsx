import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'

//import donut chart
import {Doughnut} from 'react-chartjs-2'
import useStyles from './styles.js' //uses hooks

const Details = ({title}) => {
    //hooks
    const classes = useStyles();

    return (
        <Card className={title==="Income"?classes.income:classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">$50</Typography>
                {/* <Doughnut data="DATA"/> */}
            </CardContent>
        </Card>
    )
}

export default Details
