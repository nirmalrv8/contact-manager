import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, Box } from '@mui/material';
import axios from 'axios';

const CustomerTable = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    console.log('fetching data')
    axios.get('/api/contacts')
    .then(response => {
      const contacts = response.data;
      const mappedRows = contacts.map(contact => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        contactType: contact.contactTypeString,
        address: contact.address,
        status: contact.statusString
      }));
      setRows(mappedRows);
    })
    .catch(error => {
        console.log(error);
    });
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'contactType', headerName: 'Type', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
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
      <div style={{ height: 350, width: '100%' }}>
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
