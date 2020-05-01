import React, { Fragment } from 'react';
import {
  Grid, TextField, Menu, MenuItem, Button
} from "@material-ui/core"

const AddStudentAdditionalDetails = props => {
  const {
    currentAddress, setCurrentAddress,
    permanentAddress, setPermanentAddress
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <Grid container justify={"center"}> 
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Open Menu
            </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <TextField
                multiline
                rows={4}
                label="Current Address"
                variant="outlined"
                value={currentAddress}
                onChange={event => setCurrentAddress(event.target.value)}
                fullWidth
              />
              <TextField
                multiline
                rows={4}
                style={{ marginTop: "12px" }}
                label="Permanent Address"
                variant="outlined"
                autoFocus={true}
                value={permanentAddress}
                onChange={event => setPermanentAddress(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AddStudentAdditionalDetails;