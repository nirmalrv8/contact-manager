import React from 'react';
import Stats from './Stats.tsx';
import CustomerTable from './CustomerTable.tsx';
import { Container } from '@mui/material';

function Dashboard() {
  return (
    <div className="dashboard">
      <Container maxWidth="lg" style={{ marginTop: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Hello Evano 👋</h1>
        <Stats />
      </Container>

      <Container maxWidth="lg" style={{ marginTop: '40px' }}>
        <CustomerTable />
      </Container>
    </div>
  );
}

export default Dashboard;
