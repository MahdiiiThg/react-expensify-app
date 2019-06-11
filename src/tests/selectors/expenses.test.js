import selecExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
    id:'1',
    descreption: 'Gum',
    amount: 195,
    createdAt: 0
},{
    id:'2',
    descreption: 'Car',
    amount: 295,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    descreption: 'Shoe',
    amount: 595,
    createdAt: moment(0).add(4,'days').valueOf()
}]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selecExpenses(expenses,filters)
    expect(result).toEqual([ expenses[2] ])
})


test('should filter by StartDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selecExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])
})

test('should filter by EndDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = selecExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]])
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selecExpenses(expenses,filters)
    expect(result).toEqual([ expenses[2], expenses[0],expenses[1] ])
})

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selecExpenses(expenses,filters)
    expect(result).toEqual([ expenses[2], expenses[1],expenses[0] ])
})