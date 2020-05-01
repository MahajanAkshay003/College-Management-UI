import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountMenu from "./AccountMenu";

const Header = props => {
  const [ isMenuOpen, setMenuOpen ] = useState(null);
  const classes = styles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          College Management System
        </Typography>
        <div className={classes.grow} />
        <IconButton
          edge="end"
          aria-haspopup="true"
          onClick={event => setMenuOpen(event.currentTarget)}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {/*<Button color="inherit" className={classes.button}>About</Button>*/}
        <AccountMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </Toolbar>
    </AppBar>
  );
};

const styles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(2),
    fontWeight: 300,
  },
  grow: {
    flexGrow: 1
  }
}));

export default Header;