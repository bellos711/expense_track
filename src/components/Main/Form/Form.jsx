import React, {useState} from 'react'
import {
    Grid,
    Button,
    TextField,
    Typography,
    FormControl,
    Select,
    InputLabel,
    MenuItem
} from '@material-ui/core'

import useStyles from './styles'

//put all of our inputs in a state
const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ... //speechly text goes here
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Income">Business</MenuItem>
                        <MenuItem value="Expense">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth>
                Create
            </Button>
        </Grid>
    )
}

export default Form
