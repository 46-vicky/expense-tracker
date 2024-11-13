import React from 'react'
import ExpenseCard from "./ExpenseCard";

const ExpenseList = ({expenses}) => {
  const sortedExpense = [...expenses].sort((a,b)=> b.id - a.id);
  const card =  sortedExpense.length ? sortedExpense.map((expense)=>{
        const {id,title,amount,date} = expense;
      return  <ExpenseCard key={id} title={title} amount={amount} date={date}/>
    }) : <p>No Expense!</p>
  return (
    <ul className='expense-list-cont'>
        {card}
    </ul>
  )
}

export default ExpenseList