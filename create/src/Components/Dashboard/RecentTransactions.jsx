import React, { useState } from 'react';
import './RecentTransactions.css';

export default function RecentTransactions({ items = [] }) {
  const [sortBy, setSortBy] = useState('date');

  // Sort logic
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'amount') return b.amount - a.amount;
    if (sortBy === 'payee') return a.payee.localeCompare(b.payee);
    return new Date(b.date) - new Date(a.date); // default: newest first
  });

  return (
    <div className="card shadow-sm transactions-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Last Transactions</h5>

          {/* Sort Dropdown */}
          <select
            className="form-select form-select-sm w-auto"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="payee">Sort by Payee</option>
          </select>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Payee</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((tx, index) => (
              <tr
                key={tx.id}
                style={{
                  backgroundColor: index === 0 ? 'yellow' : 'transparent',
                  fontWeight: index === 0 ? 'bold' : 'normal',
                }}
              >
                <td>{tx.payee}</td>
                <td className="text-end">${tx.amount.toFixed(2)}</td>
                <td className="text-end">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
