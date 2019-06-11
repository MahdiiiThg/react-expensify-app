import { createStore } from 'redux'
import { type } from 'os';


const incrementCount = ( {incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = { count: 0 },action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
               count: state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET' :
            return {
                count: 0
            }
        case 'SET' : 
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer)

const unSubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 9 }))
store.dispatch(resetCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 5 }))





store.dispatch(resetCount())

store.dispatch(setCount({ count: 101 }))
unSubscribe()