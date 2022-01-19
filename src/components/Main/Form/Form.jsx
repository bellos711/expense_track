import React, {useState, useContext} from 'react'
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
import {ExpenseTrackerContext} from '../../../context/context'
import {v4 as uuidv4} from 'uuid' //to create unique id for formData

import {incomeCategories, expenseCategories,incomeColors} from '../../../constants/categories' //categories info with colors
import useStyles from './styles'
import {MoneyOff } from '@material-ui/icons'

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

    //destructure the addTransaction from ExpenseTrackercontext
    const {addTransaction} = useContext(ExpenseTrackerContext)

    //function on the onclick listener for create button
    const createTransaction = () => {
        //need to create id for transaction in initialState
        const tansaction = {
            ...formData, 
            amount: Number(formData.amount),
            id: uuidv4()
        } //uuid from import
        
        addTransaction(tansaction) //gets passed to expensetrackercontext -> addtransaction
        setFormData(initialState) //blank out the forms
    }

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories
    
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
                    <Select value={formData.type} onChange={(e)=>setFormData({...formData, type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {/* <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="salary">Salary</MenuItem> */}
                        
                        {selectedCategories.map((c)=> 
                            (<MenuItem key={c.type} value={c.type}>
                                <MoneyOff style={{color: selectedCategories[c.index].color}}/>
                                {c.type}
                            </MenuItem>)
                        )}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e)=>setFormData({...formData, amount:e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
                Create
            </Button>
        </Grid>
    )
}

export default Form
