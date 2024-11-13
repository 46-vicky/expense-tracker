import React from 'react'

const ExpenseFilter = ({years,selectedYear,setSelectedYear}) => {
    

    const options = years.map((year)=><option key={year} value={year}>{year}</option>);

  return (
    <div className='filter-sec'>
        <p>Select Year:</p>
       <select value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)}>
        {options}
       </select>
    </div>
  )
}

export default ExpenseFilter