import React from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className="expense-list__fallback()">No Expenses Found</h2>
    }
    return <ul className="expense-list">
        {props.expenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    </ul>
};

export default ExpensesList;