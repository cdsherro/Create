import React, { useState } from 'react';
import RecentTransactions from './RecentTransactions';
import SpendingChart from './SpendingChart';
import BudgetList from './BudgetList';
import './Dashboard.css';

export default function Dashboard() {
  const [income] = useState(4500);
  const [expenses] = useState(1200);
  const [recent] = useState([
    { id: 1, payee: 'Amazon', amount: 5.0, date: '2025-10-01' },
    { id: 2, payee: 'Starbucks', amount: 12.5, date: '2025-10-02' },
    { id: 3, payee: 'Walmart', amount: 35.0, date: '2025-10-03' },
    { id: 4, payee: 'Uber', amount: 18.0, date: '2025-10-04' },
    { id: 5, payee: 'Amazon', amount: 9.99, date: '2025-10-05' },
    { id: 6, payee: 'Target', amount: 27.5, date: '2025-10-06' },
    { id: 7, payee: 'Netflix', amount: 15.49, date: '2025-10-07' },
    { id: 8, payee: 'Domino’s', amount: 20.0, date: '2025-10-08' },
    { id: 9, payee: 'Apple', amount: 2.99, date: '2025-10-09' },
  ]);

  // Dummy budgets (temporary frontend data)
  const [budgets, setBudgets] = useState([
    { id: 1, name: 'Groceries', total: 300, spent: 120 },
    { id: 2, name: 'Rent', total: 1200, spent: 1200 },
    { id: 3, name: 'Utilities', total: 200, spent: 150 },
    { id: 4, name: 'Entertainment', total: 150, spent: 90 }
  ]);
  const [selectedBudget, setSelectedBudget] = useState(1);

  return (
    <div className="dashboard-container">
      <div className="cards-row">
        <div className="card large-card">
          <h5>Current Income (MTD)</h5>
          <p className="income">${income.toLocaleString()}.00</p>
        </div>
        <div className="card large-card">
          <h5>Current Spending Total</h5>
          <p className="spending">-${expenses.toLocaleString()}.00</p>
        </div>
        <button
          className="add-transaction"
          data-bs-toggle="modal"
          data-bs-target="#addTransactionModal"
        >
          Add New Transaction
        </button>
      </div>

      <div className="bottom-section">
        <div className="transactions-container">
          <RecentTransactions items={recent} />
        </div>

        <div className="chart-container">
          <SpendingChart />
          <BudgetList
            budgets={budgets}
            selectedBudget={selectedBudget}
            onSelectBudget={setSelectedBudget}
          />
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="addTransactionModal"
        tabIndex="-1"
        aria-labelledby="addTransactionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTransactionModalLabel">
                Add New Transaction
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Payee</label>
                  <input type="text" className="form-control" placeholder="e.g. Amazon" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input type="number" className="form-control" placeholder="e.g. 25.00" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows="2" placeholder="Optional"></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Save Transaction
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
