import React from 'react'
import ExpenseFilter from './ExpenseFilter'

const ExpenseChart = ({years,filteredExpense,selectedYear,setSelectedYear}) => { 
    
    const monthlyExpense = Array(12).fill(0);
    filteredExpense.map((expense)=>{
        const month = new Date(expense.date).getMonth();
        monthlyExpense[month]  += Number(expense.amount); 
    })

    const maxExpense = Math.max(...monthlyExpense);

    let barChart = monthlyExpense.map((expense,index)=>(
        <div key={index} className='chart-bar'>
            <div className='bar-sec'>
                <div className='bar' style={{height: `${(expense / maxExpense) * 100}%`}}>
                </div>
            </div>
            <span className="month-label">
                {new Date(0, index).toLocaleString("default", { month: "short" })}
            </span>
        </div>
    ))

  return (
    <div className='chart-sec'>
        <ExpenseFilter years = {years} selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
        <div className='chart-container'>
        {barChart}
        </div>
    </div>
  )
}

export default ExpenseChart