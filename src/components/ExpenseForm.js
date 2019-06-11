import React from 'react'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            descreption: props.expense ? props.expense.descreption : '',
            NoteDescreption: props.expense ? props.expense.NoteDescreption :'',
            amount: props.expense ? (props.expense.amount /100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescreptionChange = (e) => {
        const descreption = e.target.value
        this.setState(() =>({descreption}))
    }
    onNoteDescreptionChange = (e) => {
        // const NoteDescreption = e.target.value
        e.persist()
        this.setState(() =>({NoteDescreption: e.target.value}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({amount}))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
          this.setState(() => ({ createdAt }));
        }
      };
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };
      onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.descreption || !this.state.amount){
            // set error state
            this.setState(()=>({error:'Please provide Description & Amount'}))

        } else {
            //clear error
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                descreption: this.state.descreption,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf() ,
                NoteDescreption: this.state.NoteDescreption
            })
        }
      }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text' 
                        placeholder='Description'
                        autoFocus
                        value={this.state.descreption}
                        onChange={this.onDescreptionChange}
                    />
                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day)=>(false)}
                    />
                    <input 
                        type='number'
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                    placeholder="Add a note (Optional)"
                    value={this.state.NoteDescreption}
                    onChange={this.onNoteDescreptionChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}