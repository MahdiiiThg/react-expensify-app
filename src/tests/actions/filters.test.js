import moment from 'moment'
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters'

test('should generate set Start date', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate end set date', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should sortby sortByAmount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
}) 

test('should sortby sortByDate', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
}) 

test('should setTextFilter with text value', () => {
    const action = setTextFilter('something in')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'something in'
    })
}) 

test('should setTextFilter withOut text value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
}) 




