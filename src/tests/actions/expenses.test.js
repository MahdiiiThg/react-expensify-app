import { addExpense , removeExpense , editExpense} from '../../actions/expenses'

test('should setup remove action obj' , () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('Edite Expense should work like' , () => {
    const editExs = editExpense('123abc',{note: 'New Note'})
    expect(editExs).toEqual({
        type: 'EDITE_EXPENSE',
        id: '123abc' ,
        updates: {
            note: 'New Note'
        }
    })
})

test('should setup add expense with values', () => {
    const expenseData= {
        descreption: 'Rent' ,
        note: 'this was last month rent' ,
        amount: 109500 ,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
})
})

test('should setup add expense with defaults values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            descreption: '' ,
            note: '' ,
            amount: 0 ,
            createdAt: 0
        }
    })
})