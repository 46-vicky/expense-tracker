import React from 'react'

const ExpenseFilter = ({years,selectedYear,setSelectedYear,filteredExpense}) => {
  console.log(filteredExpense)
    
  const totalExpense = filteredExpense.length 
  ? filteredExpense.reduce((accumulator, expense) => accumulator + expense.amount, 0) 
  : 0;

    const options = years.map((year)=><option key={year} value={year}>{year}</option>);

  return (
    <div className='filter-sec'>
      <p>Total Expense : {totalExpense}</p>
      <div className='filter-part'>
        <p>Select Year:</p>
        <select value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)}>
          {options}
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter