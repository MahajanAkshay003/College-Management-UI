import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

const AccountMenu = props => {
  const { isMenuOpen, setMenuOpen } = props;
  const logoutUser = () => {
    setMenuOpen(null);
    props.history.push("/");
  }
  return (
    <Menu
      anchorEl={isMenuOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(isMenuOpen)}
    >
      <MenuItem onClick={() => props.history.push("/dashboard/profile")}>My Account</MenuItem>
      <MenuItem onClick={logoutUser}>Logout</MenuItem>
    </Menu>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: true
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(AccountMenu);