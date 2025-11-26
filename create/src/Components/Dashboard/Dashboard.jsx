import React, { useState } from 'react';
import RecentTransactions from './RecentTransactions';
import SpendingChart from './SpendingChart';
import BudgetList from './BudgetList';
import './Dashboard.css';

const BUDGET_TYPES = ['Groceries', 'Rent', 'Utilities', 'Fun'];
const BUDGET_TEMPLATES = ['Default', 'Monthly Standard', 'Minimalist', 'Family', 'Student'];

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
    { id: 8, payee: "Domino's", amount: 20.0, date: '2025-10-08' },
    { id: 9, payee: 'Apple', amount: 2.99, date: '2025-10-09' },
  ]);

  const [budgets, setBudgets] = useState([
    {
      id: 1,
      name: 'November 2025 Budget',
      categories: [
        { name: 'Rent', amount: 2250, percent: 50 },
        { name: 'Groceries', amount: 450, percent: 10 },
      ],
    },
    {
      id: 2,
      name: 'Vacation Budget',
      categories: [
        { name: 'Hotels', amount: 900, percent: 40 },
        { name: 'Food', amount: 300, percent: 14 },
      ],
    },
  ]);

  const [selectedBudgetId, setSelectedBudgetId] = useState(budgets[0]?.id ?? null);
  const selectedBudget = budgets.find(b => b.id === selectedBudgetId);

  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [budgetName, setBudgetName] = useState('');
  const [categories, setCategories] = useState([
    { name: '', amount: 0, percent: 0 }
  ]);

  const handleCategoryChange = (idx, field, value) => {
    setCategories(prev =>
      prev.map((cat, i) => i === idx ? { ...cat, [field]: value } : cat)
    );
  };
  const addCategory = () => setCategories([...categories, { name: "", amount: 0, percent: 0 }]);
  const removeCategory = idx => setCategories(categories.filter((_, i) => i !== idx));

  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleSaveBudget = (e) => {
    e.preventDefault();
    if (!budgetName.trim()) return;
    const newBudget = {
      id: budgets.length + 1,
      name: budgetName,
      categories: categories.map(cat => ({
        name: cat.name,
        amount: Number(cat.amount),
        percent: Number(cat.percent)
      }))
    };
    setBudgets([...budgets, newBudget]);
    setBudgetName('');
    setCategories([{ name: '', amount: 0, percent: 0 }]);
    setShowBudgetModal(false);
    setSelectedBudgetId(newBudget.id);
  };

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
          onClick={() => setShowTransactionModal(true)}
        >
          Add New Transaction
        </button>
        <div className="budget-add-container">
          <select
            className="select-budget"
            value={selectedBudgetId}
            onChange={e => setSelectedBudgetId(Number(e.target.value))}
            style={{ marginRight: '10px' }}
          >
            {budgets.map(budget => (
              <option value={budget.id} key={budget.id}>{budget.name}</option>
            ))}
          </select>
          <button
            className="add-budget-btn"
            onClick={() => setShowBudgetModal(true)}
          >
            Add Budget
          </button>
        </div>
      </div>

      <div className="bottom-section">
        <div className="transactions-container">
          <RecentTransactions items={recent} budgets={budgets} />
        </div>
        <div className="chart-container">
          <SpendingChart />
          <BudgetList
            budgets={selectedBudget ? selectedBudget.categories : []}
            selectedBudget={null}
            onSelectBudget={() => {}} 
          />
        </div>
      </div>

      {/* Modal for Add Transaction */}
      {showTransactionModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5>Add New Transaction</h5>
              <button className="custom-modal-close" onClick={() => setShowTransactionModal(false)}>×</button>
            </div>
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
                <label className="form-label">Add to Budget *</label>
                <select className="form-control" required>
                  <option value="">Select budget...</option>
                  <option value="all">All Budgets</option>
                  {budgets.map(budget => (
                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea className="form-control" rows="2" placeholder="Optional"></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Upload File/Image (optional)</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={e => setFile(e.target.files[0])}
                />
                {file && <div className="mt-2">File selected: {file.name}</div>}
              </div>
              <button type="submit" className="btn btn-success w-100">Save Transaction</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Add Budget*/}
      {showBudgetModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5>Add Budget</h5>
              <button className="custom-modal-close" onClick={() => setShowBudgetModal(false)}>×</button>
            </div>
            <form onSubmit={handleSaveBudget}>
              <div className="mb-3">
                <label className="form-label">Budget Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={budgetName} 
                  onChange={e => setBudgetName(e.target.value)} 
                  placeholder="e.g. November 2025 Budget"
                />
              </div>

              <div className="category-headers">
                <span>Category Name</span>
                <span>Amount</span>
                <span>Percent</span>
                <span></span>
              </div>

              {categories.map((cat, idx) => (
                <div className="category-row" key={idx}>
                  <input 
                    type="text" 
                    placeholder="e.g. Rent" 
                    value={cat.name} 
                    onChange={e => handleCategoryChange(idx, 'name', e.target.value)} 
                  />
                  <input 
                    type="number" 
                    placeholder="e.g. 1200" 
                    value={cat.amount} 
                    onChange={e => handleCategoryChange(idx, 'amount', e.target.value)} 
                  />
                  <input 
                    type="number" 
                    placeholder="e.g. 50" 
                    value={cat.percent} 
                    onChange={e => handleCategoryChange(idx, 'percent', e.target.value)} 
                    min={0} 
                    max={100} 
                  />
                  <button type="button" onClick={() => removeCategory(idx)}>–</button>
                </div>
              ))}
              <button type="button" onClick={addCategory} style={{ marginBottom: '10px' }}>+ Add Category</button>
              <button type="submit" className="btn btn-success w-100">Save Budget</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}