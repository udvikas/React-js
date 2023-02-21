// first basic custom made component

import './ExpenseItem.css';

function ExpenseItem() {
   const expenseDate = new Date(2021, 2, 28);
   const expenseTitle = 'Car Insurance';
   const expenseAmount = '267.13';
   const LocationOfExpenditure = 'Automobile'
     return (
     <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
         <h2>{expenseTitle}</h2>
         <div className='Location-Expenditure'>{LocationOfExpenditure}</div>
         <div className='expense-item__price'>${expenseAmount}</div>
        </div>
     </div>
     );
}
export default ExpenseItem;