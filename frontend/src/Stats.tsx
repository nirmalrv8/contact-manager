import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import { People, DesktopWindows, ArrowUpward, ArrowDownward } from '@mui/icons-material';

const Stats = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '16px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      <Grid container spacing={3}>
        {/* Total Customers */}
        <Grid item xs={12} md={4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{
                backgroundColor: '#CCF4E0',
                marginRight: '16px',
                width: 75,
                height: 75,
              }}
            >
              <People style={{ color: '#00C48C', fontSize: '40px' }} />
            </Avatar>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                Total Customers
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>5,423</Typography>
              <Typography variant="body2" style={{ color: '#00C48C', display: 'flex', alignItems: 'center' }}>
                <ArrowUpward style={{ marginRight: '5px', fontSize: '20px'}}/>
                <Typography sx={{ fontWeight: 500 }}>16%</Typography>
                <span style={{ color: '#000000', marginLeft: '4px' }}>this month</span>
              </Typography>
            </div>
          </div>
        </Grid>

        {/* Members */}
        <Grid item xs={12} md={4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{
                backgroundColor: '#CCF4E0',
                marginRight: '16px',
                width: 75,
                height: 75,
              }}
            >
              <People style={{ color: '#00C48C', fontSize: '40px' }} />
            </Avatar>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                Members
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>1,893</Typography>
              
              <Typography variant="body2" style={{ color: '#FF647C', display: 'flex', alignItems: 'center' }}>
                <ArrowDownward style={{ marginRight: '5px', fontSize: '20px'}}/>
                <Typography sx={{ fontWeight: 500 }}>1%</Typography>
                <span style={{ color: '#000000', marginLeft: '4px' }}>this month</span>
              </Typography>
            </div>
          </div>
        </Grid>

        {/* Active Now */}
        <Grid item xs={12} md={4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{
                backgroundColor: '#CCF4E0',
                marginRight: '16px',
                width: 75,
                height: 75,
              }}
            >
              <DesktopWindows style={{ color: '#00C48C', fontSize: '40px' }} />
            </Avatar>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                Active Now
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>189</Typography>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} style={{ width: '30px', height: '30px', marginLeft: i > 1 ? '-10px' : '0' }}>
                    <img src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`} alt={`User ${i}`} />
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Stats;
