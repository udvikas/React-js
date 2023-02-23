import './ExpenseDetails.css';

function ExpenseDetails(props) {

    return (
    <div className='expense-item__description'>
         <h2>{props.title}</h2>
         <div className='location-Expenditure'>{props.location}</div>
         <div className='expense-item__price'>${props.amount}</div>
        </div>
    )
}
export default ExpenseDetails;