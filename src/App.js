import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import ExpenseChart from "./component/ExpenseChart";

const defaultExpense = [
  {
    id: 1,
    title: "Laptop",
    amount: 400000,
    date: "2022-02-10",
  },
  {
    id: 2,
    title: "Headset",
    amount: 1000,
    date: "2023-05-25",
  },
  {
    id: 3,
    title: "Tv",
    amount: 15000,
    date: "2023-10-10",
  },
  {
    id: 4,
    title: "Bike",
    amount: 240000,
    date: "2024-07-26",
  },
  {
    id: 5,
    title: "Mobile",
    amount: 20000,
    date: "2024-08-26",
  },
  {
    id: 6,
    title: "Monitor",
    amount: 40000,
    date: "2024-08-02",
  }
];

function App() {
  
  const [expenses, setExpenses] = useState(defaultExpense);
  const [years,setYears] = useState([]);
  const [selectedYear,setSelectedYear] = useState();
  const [filteredExpense,setFilteredExpense] = useState([]);

  useEffect(()=>{
    setYears([...new Set(expenses.map((expense)=>new Date(expense.date).getFullYear().toString()))])
  },[expenses])

  useEffect(()=>{
    if (years.length > 0) {
      setSelectedYear(Math.max(...years.map(year => parseInt(year))).toString());
    }
  },[years]);


  useEffect(()=>{
    if(selectedYear){
      let filteredResult = expenses.filter((expense)=>(new Date(expense.date).getFullYear().toString()===selectedYear))
      setFilteredExpense(filteredResult);
    }

  },[selectedYear,expenses])
  return <div className="App">
    <ExpenseForm setExpenses={setExpenses} expenses={expenses}/>
    <ExpenseChart years={years} filteredExpense={filteredExpense} selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
    <ExpenseList expenses={filteredExpense}/>
  </div>;
}

export default App;
