import React from 'react';

export default function DashboardCard({ title, value, color }) {
  return (
    <div className="card shadow-sm p-3" style={{ borderRadius: '5px', border: 'none', minHeight: '110px' }}>
      <h5 className="fw-bold">{title}</h5>
      <h4 style={{ color: color === 'green' ? 'green' : 'red', fontWeight: 'bold' }}>{value}</h4>
    </div>
  );
}
