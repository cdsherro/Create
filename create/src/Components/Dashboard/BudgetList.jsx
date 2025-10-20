import React from "react";
import "./BudgetList.css";

export default function BudgetList({ budgets, selectedBudget, onSelectBudget }) {
  return (
    <div className="budget-list">
      <h5>Budgets</h5>
      <ul>
        {budgets.map((b) => (
          <li
            key={b.id}
            className={b.id === selectedBudget ? "budget-item selected" : "budget-item"}
            onClick={() => onSelectBudget(b.id)}
          >
            <div className="budget-header">
              <span className="budget-name">{b.name}</span>
              <span className="budget-total">${b.total}</span>
            </div>
            <div className="budget-progress">
              <div
                className="budget-bar"
                style={{
                  width: `${(b.spent / b.total) * 100}%`,
                }}
              ></div>
            </div>
            <small>{b.spent} / {b.total} spent</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
