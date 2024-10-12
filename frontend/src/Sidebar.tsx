import React from 'react';
import { Drawer, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BoxIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CampaignIcon from '@mui/icons-material/Campaign';
import HelpIcon from '@mui/icons-material/Help';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  },
  listItem: {
    color: '#8F8FA0 !important',
    '&.Mui-selected': {
      backgroundColor: '#7E33FF !important',
      color: '#fff !important',
      '&:hover': {
        backgroundColor: '#7E33FF !important',
      },
    },
  },
  logo: {
    padding: '16px',
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: '#8F8FA0',
  },
  selectedIcon: {
    color: '#fff',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ height: 64 }} />
      <div className={classes.logo}>
        <img src="/logo.png" alt="Dashboard logo" width="32" height="32" style={{ marginRight: '8px' }} />
        Dashboard v.01
      </div>
      <Divider />
      <List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          className={classes.listItem}
        >
          <ListItemIcon>
            <DashboardIcon className={selectedIndex === 0 ? classes.selectedIcon : classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          className={classes.listItem}
        >
          <ListItemIcon>
            <BoxIcon className={selectedIndex === 1 ? classes.selectedIcon : classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Product" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          className={classes.listItem}
        >
          <ListItemIcon>
            <PeopleIcon className={selectedIndex === 2 ? classes.selectedIcon : classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          className={classes.listItem}
        >
          <ListItemIcon>
            <AttachMoneyIcon className={selectedIndex === 3 ? classes.selectedIcon : classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Income" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          className={classes.listItem}
        >
          <ListItemIcon>
            <CampaignIcon className={selectedIndex === 4 ? classes.selectedIcon : classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Promote" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          className={classes.listItem}
        >
          <ListItemIcon>
            <HelpIcon className={selectedIndex === 5 ? classes.selectedIcon : classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Dashboard;
