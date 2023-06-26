import React from 'react';

import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';
const INITIAL_EXP = [
  {
    id: 'e1',
    title: 'Iphone',
    amount: 499.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Expenses',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(INITIAL_EXP)

  const addExpenseHandler = expense => {
    setExpenses(previousExpenses => {
      return [expense, ...previousExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;