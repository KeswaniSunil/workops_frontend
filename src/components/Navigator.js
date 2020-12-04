import React,{useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { Link} from 'react-router-dom'


const head=[
  {
    id:'Config',
    children:[
      {
        id: 'Dashboard', 
        route:'/dashboard',
        icon:<DashboardIcon />
      },
      {
        id: 'Projects', 
        route:'/projects',
        icon:<HomeIcon />
      }
    ]
  }
]
const categories = [
  {
    id: 'Main',
    children: [
      { id: 'Backlog',route:"/backlog", icon: <PeopleIcon />},
      { id: 'Components',route:"/components", icon: <DnsRoundedIcon /> },
      { id: 'Active Sprints',route:"/sprints", icon: <TimerIcon /> },
      { id: 'Versions',route:"/versions", icon: <SettingsEthernetIcon /> },
      { id: 'Project Team ',route:"/projectteam", icon: <PermMediaOutlinedIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      { id: 'Reports', icon: <SettingsInputComponentIcon /> },
    ],
  },
  {
    id: 'Settings',
    children: [
      { id: 'Project Settings',route:"/projectsettings", icon: <SettingsIcon /> },
      // { id: 'Help', icon: <TimerIcon /> },
      { id: 'Log out',route:"/logout", icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  firebase: {
    fontSize: 24,
    // color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  const [active,setActive]=useState("Dashboard");
  return (
    <Drawer variant="permanent" {...other} style={{overflow: "hidden"}}>
      <List disablePadding>
      <ListItem className={clsx( classes.item, classes.itemCategory,classes.firebase)}>
        <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Workops
          </ListItemText>
        </ListItem>
        <div
          className={clsx(classes.item,classes.itemCategory)}
          style={{height:"10%",display:"flex",alignItems:"center"}}
        >
          <span className={classes.itemIcon} style={{marginLeft:"5px"}}>
            <img src="/images/projectIcon1.png" height="30" style={{borderRadius:"5px"}}/>
          </span>
          <div
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            <h5 style={{marginBottom:0}}>Tracker</h5>
            <span style={{fontSize:"12px"}}>Key: ZG20191208</span>    
          </div>
        </div>
        {head.map(({ id, children }) => (
          <React.Fragment key={id}>
            {children.map(({ id: childId,route, icon}) => (
              <ListItem
                key={childId}
                button
                onClick={()=>setActive(childId)}
                component={Link} 
                to={route}
                className={clsx(classes.item,classes.itemCategory, active===childId && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
        </React.Fragment>
        ))}
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId,route, icon}) => (
              <ListItem
                key={childId}
                button
                onClick={()=>setActive(childId)}
                component={Link} 
                to={route}
                className={clsx(classes.item, active===childId && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);