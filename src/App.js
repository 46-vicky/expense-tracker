import { useState } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";

const defaultExpense = [
  {
    id: 1,
    title: "Laptop",
    amount: 400000,
    date: "2024-02-10",
  },
  {
    id: 2,
    title: "Headset",
    amount: 1000,
    date: "2024-05-25",
  },
  {
    id: 3,
    title: "Tv",
    amount: 15000,
    date: "2024-10-10",
  },
  {
    id: 4,
    title: "Bike",
    amount: 2400000,
    date: "2024-07-26",
  },
];

function App() {
  const [expenses, setExpenses] = useState(defaultExpense);
  return <div className="App">
    <ExpenseForm setExpenses={setExpenses} expenses={expenses}/>
    <ExpenseList expenses={expenses}/>
  </div>;
}

export default App;
