import { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from '../ExpensesListFiltered/ExpenseList';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
    const [defaultYear, setSelectedYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === defaultYear;
    });


    return <div>
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={defaultYear} onYearChange={filterChangeHandler} />
                <ExpenseChart expenses = {filteredExpense} />
                <ExpensesList expenses={filteredExpense} />
            </Card>
        </li>
    </div>
}

export default Expense;