import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Chip, Box } from '@mui/material';

const CustomerTable = () => {
  const columns = [
    { field: 'name', headerName: 'Customer Name', flex: 1 },
    { field: 'company', headerName: 'Company', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          style={{
            backgroundColor: params.value === 'Active' ? '#E8F5E9' : '#FFEBEE',
            color: params.value === 'Active' ? '#00C48C' : '#FF647C',
            fontWeight: 'bold',
          }}
        />
      ),
    },
  ];

  const rows = [
    { id: 1, name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { id: 2, name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    { id: 3, name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        All Customers
      </Typography>
      <Typography variant="body1" style={{ color: '#00C48C', fontSize: '14px', marginBottom: '10px' }}>
        Active Members
      </Typography>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            border: 'none',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#F7F8FA',
              color: '#A6A6A6',
              fontWeight: 'bold',
            },
          }}
        />
      </div>
    </Box>
  );
};

export default CustomerTable;
