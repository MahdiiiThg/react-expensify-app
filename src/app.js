
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/appRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/style.scss';



const store = configureStore();

store.dispatch(addExpense({descreption: 'Water bill' , amount: 250}))
store.dispatch(addExpense({descreption: 'Gas bill', amount:24 , createdAt:1000}))
store.dispatch(addExpense({descreption: 'Rent', amount:1124 , createdAt:100}))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters)
console.log(visibleExpenses)



const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
)


ReactDOM.render(jsx , document.getElementById('app'))
