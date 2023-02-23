// first basic custom made component
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import './ExpenseDate.css';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {

     return (
     <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount}></ExpenseDetails>
     </div>
     );
}
export default ExpenseItem;