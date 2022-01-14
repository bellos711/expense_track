import React, {useReducer, createContext} from 'react'

import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    //useReducer for passing real logic like adding deleting trnsactions etc.
    //reducer = how we will be changing our state
    //const [state, dispatch] = useReducer(reducer, initialState) 
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //ACTIONS Action Creators
    //delete transaction happens when we delete we need which one based on ID
    const deleteTransaction = (id) => {
        //once we know id we are dispatching an action which is plain object with 2 things
        //payload additional data we pass over with our action
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //for addTransaction, we dont have an id so we will need the entire transaction
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
        //these actions have to be passed through our entire application context


    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction
        }}>
            {/*Temporary static value appName will have all data about transaction balance adding deleting*/}
            {children}
        </ExpenseTrackerContext.Provider>
    )
}