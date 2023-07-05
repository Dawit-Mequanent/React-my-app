import React, { useState } from 'react';



import Card from '../UI/Card';

import ExpensesFilter from './ExpensesFilter';

import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
