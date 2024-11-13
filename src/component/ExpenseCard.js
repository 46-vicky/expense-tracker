import React from "react";

const ExpenseCard = ({ title, amount, date }) => {
  const cardTitle = title;
  const cardAmount = amount;
  const cardDate = new Date(date);
  const day = cardDate.toLocaleDateString("en-US", { weekday: "short" });
  const dte = cardDate.toLocaleDateString("en-US", { day: "2-digit" });
  const month = cardDate.toLocaleDateString("en-US", { month: "short" });
  const year = cardDate.getFullYear();

  const card = (
    <div className="expense-card">
      <div className="expense-day">
        <p>{year}</p>
        <p>{month}-{dte}</p>
        <p>{day}</p>
      </div>
      <p className="expense-title">{cardTitle}</p>
      <p className="expense-amount">₹{cardAmount}</p>
    </div>
  );

  return <li>{card}</li>;
};

export default ExpenseCard;
