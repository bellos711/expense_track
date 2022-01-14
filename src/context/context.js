import React, {useReducer, createContext} from 'react'

import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    //useReducer for passing real logic like adding deleting trnsactions etc.
    //reducer = how we will be changing our state
    const [state, dispatch] = useReducer(reducer, initialState) 
    return(
        <ExpenseTrackerContext.Provider value={{appName: 'Expense Tracker'}}>
            {/*Temporary static value appName will have all data about transaction balance adding deleting*/}
            {children}
        </ExpenseTrackerContext.Provider>
    )
}