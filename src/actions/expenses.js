import { createStore , combineReducers } from  'redux' 
import uuid from 'uuid'

// Add expenses 

export const addExpense = ( 
    {
        descreption = '' ,
        note = '' ,
        amount = 0 ,
        createdAt = 0} = {}
        ) => ({
        type: 'ADD_EXPENSE',
        expense: {
        id: uuid(),
        descreption,
        note,
        amount,
        createdAt
    }
})

// Remove Expense

export const removeExpense = ({id}={}) => ({
    type: "REMOVE_EXPENSE",
    id
})
// Edit Expense

export const editExpense = (id,updates) => ({
    type: 'EDITE_EXPENSE',
    id,
    updates
})