import React, { useState } from 'react';
import './Transactions.css';

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2025-10-01', payee: 'Amazon', category: 'Shopping', amount: 5.0, notes: '' },
    { id: 2, date: '2025-10-02', payee: 'Starbucks', category: 'Food & Dining', amount: 12.5, notes: '' },
    { id: 3, date: '2025-10-03', payee: 'Walmart', category: 'Groceries', amount: 35.0, notes: '' },
    { id: 4, date: '2025-10-04', payee: 'Uber', category: 'Transportation', amount: 18.0, notes: '' },
    { id: 5, date: '2025-10-05', payee: 'Amazon', category: 'Shopping', amount: 9.99, notes: '' },
    { id: 6, date: '2025-10-06', payee: 'Target', category: 'Shopping', amount: 27.5, notes: '' },
    { id: 7, date: '2025-10-07', payee: 'Netflix', category: 'Entertainment', amount: 15.49, notes: 'Monthly subscription' },
    { id: 8, date: '2025-10-08', payee: 'Domino\'s', category: 'Food & Dining', amount: 20.0, notes: '' },
    { id: 9, date: '2025-10-09', payee: 'Apple', category: 'Entertainment', amount: 2.99, notes: 'iCloud storage' },
    { id: 10, date: '2025-10-10', payee: 'Shell Gas', category: 'Transportation', amount: 45.0, notes: '' },
    { id: 11, date: '2025-10-11', payee: 'Whole Foods', category: 'Groceries', amount: 67.32, notes: '' },
    { id: 12, date: '2025-10-12', payee: 'Chipotle', category: 'Food & Dining', amount: 14.25, notes: '' },
  ]);

  const [sortBy, setSortBy] = useState('date-desc');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    date: '',
    payee: '',
    category: '',
    amount: '',
    notes: '',
    file: null
  });

  const categories = [
    'All Categories',
    'Groceries',
    'Food & Dining',
    'Shopping',
    'Transportation',
    'Entertainment',
    'Utilities',
    'Healthcare',
    'Other'
  ];

  // Sort transactions
  const sortedTransactions = [...transactions].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'amount-desc':
        return b.amount - a.amount;
      case 'amount-asc':
        return a.amount - b.amount;
      case 'payee':
        return a.payee.localeCompare(b.payee);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  // Filter by category
  const filteredTransactions = filterCategory === 'all' 
    ? sortedTransactions 
    : sortedTransactions.filter(t => t.category === filterCategory);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      date: formData.date,
      payee: formData.payee,
      category: formData.category,
      amount: parseFloat(formData.amount),
      notes: formData.notes
    };
    setTransactions([...transactions, newTransaction]);
    resetForm();
    setShowAddModal(false);
  };

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      date: transaction.date,
      payee: transaction.payee,
      category: transaction.category,
      amount: transaction.amount.toString(),
      notes: transaction.notes || '',
      file: null
    });
    setShowAddModal(true);
  };

  const handleUpdateTransaction = (e) => {
    e.preventDefault();
    setTransactions(transactions.map(t => 
      t.id === editingTransaction.id 
        ? {
            ...t,
            date: formData.date,
            payee: formData.payee,
            category: formData.category,
            amount: parseFloat(formData.amount),
            notes: formData.notes
          }
        : t
    ));
    resetForm();
    setShowAddModal(false);
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      setTransactions(transactions.filter(t => t.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      date: '',
      payee: '',
      category: '',
      amount: '',
      notes: '',
      file: null
    });
  };

  const totalAmount = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="transactions-page">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <button 
          className="btn-add-transaction"
          onClick={() => {
            setEditingTransaction(null);
            resetForm();
            setShowAddModal(true);
          }}
        >
          + Add Transaction
        </button>
      </div>

      <div className="transactions-controls">
        <div className="control-group">
          <label>Sort by:</label>
          <select 
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date-desc">Date (Newest First)</option>
            <option value="date-asc">Date (Oldest First)</option>
            <option value="amount-desc">Amount (High to Low)</option>
            <option value="amount-asc">Amount (Low to High)</option>
            <option value="payee">Payee (A-Z)</option>
            <option value="category">Category (A-Z)</option>
          </select>
        </div>

        <div className="control-group">
          <label>Filter by Category:</label>
          <select 
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.slice(1).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="transactions-summary">
          <strong>Total: ${totalAmount.toFixed(2)}</strong>
          <span>({filteredTransactions.length} transactions)</span>
        </div>
      </div>

      <div className="transactions-table-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Payee</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.payee}</td>
                <td>
                  <span className={`category-badge category-${transaction.category.toLowerCase().replace(/\s/g, '-')}`}>
                    {transaction.category}
                  </span>
                </td>
                <td className="amount-cell">${transaction.amount.toFixed(2)}</td>
                <td className="notes-cell">{transaction.notes || '—'}</td>
                <td className="actions-cell">
                  <button 
                    className="btn-edit"
                    onClick={() => handleEditTransaction(transaction)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Transaction Modal */}
      {showAddModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5>{editingTransaction ? 'Edit Transaction' : 'Add New Transaction'}</h5>
              <button 
                className="custom-modal-close" 
                onClick={() => {
                  setShowAddModal(false);
                  setEditingTransaction(null);
                  resetForm();
                }}
              >
                ×
              </button>
            </div>
            <form onSubmit={editingTransaction ? handleUpdateTransaction : handleAddTransaction}>
              <div className="mb-3">
                <label className="form-label">Date *</label>
                <input 
                  type="date" 
                  className="form-control" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Payee *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. Amazon"
                  value={formData.payee}
                  onChange={(e) => setFormData({...formData, payee: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category *</label>
                <select 
                  className="form-control"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="">Select category...</option>
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Amount *</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="e.g. 25.00"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Notes (Optional)</label>
                <textarea 
                  className="form-control" 
                  rows="2" 
                  placeholder="Add any notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Upload Receipt/File (Optional)</label>
                <input 
                  type="file" 
                  className="form-control"
                  onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
                />
                {formData.file && <div className="mt-2">File selected: {formData.file.name}</div>}
              </div>
              <button type="submit" className="btn btn-success w-100">
                {editingTransaction ? 'Update Transaction' : 'Save Transaction'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}