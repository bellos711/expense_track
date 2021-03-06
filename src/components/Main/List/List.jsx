import React, {useContext} from 'react'
import {
    List as MUIList, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    Avatar,
    ListItemSecondaryAction,
    IconButton,
    Slide
} from '@material-ui/core'
//using as MUIList because this component is called List
import { Delete, MoneyOff} from '@material-ui/icons'

import {ExpenseTrackerContext} from '../../../context/context'

import useStyles from './styles'


const List = () => {
    const classes = useStyles();
    //context used by using hooks
    //const globalState = useContext(ExpenseTrackerContext);
    //CAN DESTRUCTURE WHICH context we need
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext)

    //console.log(deleteTransaction);

    //temporary fake transactions it is now passed from the context
    // const transactions = [
    //     {
    //         id: 1,
    //         type: "Income",
    //         category: 'Salary',
    //         amount: 1000,
    //         date: "Thursday, Jan 15",
    //     },
    //     {
    //         id: 2,
    //         type: "Expense",
    //         category: 'Rent',
    //         amount: 500,
    //         date: "Thursday, Jan 17",
    //     },
    //     {
    //         id: 3,
    //         type: "Income",
    //         category: 'Business',
    //         amount: 100,
    //         date: "Thursday, Jan 22",
    //     }
        
    // ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}> 
                    {/*Anything inside this <Slide> is animated */}
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={
                                transaction.type==='Income' ? classes.avatarIncome:classes.avatarExpense
                                }>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick={() => {deleteTransaction(transaction.id)}}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
