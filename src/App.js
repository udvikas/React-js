import ExpenseItem from "./Component/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Daily Item'
    },
    { id: "e2", 
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: 'Electronics'
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Automoble'
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Wooden items'
    },
  ];
const display = []
  for (let i = 0; i < expenses.length; i++) {
    display.push( <ExpenseItem
      title={expenses[i].title}
      amount={expenses[i].amount}
      date={expenses[i].date}
      location={expenses[i].location}
    ></ExpenseItem>)
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>{display}</div>
    </div>
  );
}

export default App;
