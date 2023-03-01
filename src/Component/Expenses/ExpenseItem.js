import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
console.log('ExpenseItem is calling')
// return React.createElement(
//    Card,
//    {className:'expense-item'},
//    React.createElement(ExpenseDate,{date:props.date}),
//    React.createElement('div',{className:'expenses-item_description'}),
//    React.createElement('h2',{}, props.title),
//    React.createElement('div',{className:'expense-item__price'},props.amount),
// )
let [title, setTitle] = useState(props.title)
let clickHandler = () => {
  setTitle('Updated!')
  console.log(title);
}
const [visible, setVisible] = useState(props.amount)
const removeElement = () => {
  setVisible((prev) => !prev);
  console.log(visible);
}
const [expense, setExpense] = useState(props.amount)
const changeExpense = () => {
  setExpense('100')
  console.log(expense);
}
  return (
   <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
      <button onClick={removeElement}>Delete</button>
      <button onClick={changeExpense}>change Expense</button>
   </Card>
  );
}

export default ExpenseItem;