import { Collapse } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { LinkProps } from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { ExpandLess, ExpandMore, HomeOutlined, PeopleOutline } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { Omit } from '@material-ui/types';
import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NavTop from '../NavBar/NavTop';
import { useStyles } from "./styles";



const toMap: { [key: string]: string } = {
  '/app/clients': 'Clientes',
  '/app/clients/new': 'Cadastrar',
  '/app': 'Home'
};

const iconMap: { [key: string]: JSX.Element } = {
  'book': <PeopleOutline/>,
  'home': <HomeOutlined/>
};

interface ListItemLinkProps extends LinkProps {
  to?: string;
  open?: boolean;
  icon?: string;
  label?: string;
}

function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
  const { to, open, icon,label, ...other } = props;
  const primary = toMap[to];
  const index = iconMap[icon];
  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        {index && (<ListItemIcon>{index}</ListItemIcon>)}
        <ListItemText primary={label || primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

const SideBar: React.FC = () =>{
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const [CollapsedOpen, setCollapsedOpen] = React.useState(true);

    const handleClick = (e) => {
      e.preventDefault()
      setCollapsedOpen((prevOpen) => !prevOpen);
    };

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="default"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <NavTop />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItemLink to="/app" icon="home" />
            <ListItemLink to="/app/clients" icon="book" open={CollapsedOpen} onClick={handleClick} />
            <Collapse component="li" in={CollapsedOpen} timeout="auto" unmountOnExit>
              <List >
                <ListItemLink to="/app/clients" label="Listar"/>
                <ListItemLink to="/app/clients/new" />
              </List>
            </Collapse>
          </List>
          <Divider />

        </Drawer>
        </div>

    );
}

export default SideBar;