import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {logoutUserAction} from "../../../actions/CollegeUser/actionObjects/collegeUserActions";

const AccountMenu = props => {
  const { isMenuOpen, setMenuOpen } = props;
  const logoutUser = () => {
    setMenuOpen(null);
    const userType = props.user.userType;
    props.logoutUser();
    localStorage.clear();
    props.history.push(`/login/${userType}`);
  }
  return (
    <Menu
      anchorEl={isMenuOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(isMenuOpen)}
      onClose={() => setMenuOpen(null)}
    >
      <MenuItem onClick={logoutUser}>Logout</MenuItem>
    </Menu>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUserAction())
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AccountMenu);