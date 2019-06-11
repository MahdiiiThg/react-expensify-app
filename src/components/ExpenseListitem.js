import React from 'react'
import { Link } from 'react-router-dom'



const ExpenseListItem = ({dispatch ,id ,descreption , amount ,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{descreption}</h3>
        </Link>
        <p>Amount: {amount} - CreatedAt: {createdAt}</p>
        
    </div>
);

export default ExpenseListItem