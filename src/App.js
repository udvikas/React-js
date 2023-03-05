import React from "react";
import NewExpense from "./Component/NewExpense/NewExpense";
import Expenses from "./Component/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Daily Item",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Electronics",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Automoble",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.00,
      date: new Date(2021, 5, 12),
      location: "Wooden items",
    },
  ];
  const addExpenseHandler = expense => {
    console.log('in App.js');
    console.log(expense);
  }
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;
