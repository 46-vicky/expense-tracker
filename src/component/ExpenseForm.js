import React, { useState } from "react";

const ExpenseForm = ({expenses,setExpenses}) => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleTitle = (event) => {
    setNewExpense((prev)=> ({...prev,title:event.target.value}))
  };

  const handleAmount = (event) => {
    setNewExpense((prev)=> ({...prev,amount:event.target.value}))
  };

  const handleDate = (event) => {
    setNewExpense((prev)=> ({...prev,date:event.target.value}))
  };


  const handleSubmit =(event)=>{
    event.preventDefault();
    const newExpenseId = expenses[expenses.length-1].id + 1;
    const expenseToAdd = {id:newExpenseId,...newExpense};
    setExpenses((prev)=>([...prev,expenseToAdd]));
    setNewExpense({
        title: "",
        amount: "",
        date: "",
      })

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required onChange={handleTitle} value={newExpense.title}/>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" required onChange={handleAmount} value={newExpense.amount}/>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" required onChange={handleDate} value={newExpense.date}/>
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
