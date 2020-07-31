import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Grid,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core";

const DrawerHeader = ({ name, size, avatarVariant, textVariant }) => {
  return (
    <div>
      <Grid container spacing={0} direction="column" alignItems="center">
        <IconButton size={size}>
          <Avatar alt={name} variant={avatarVariant} />
        </IconButton>
        <Grid item xs={12}>
          <Typography variant={textVariant}>{name}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

DrawerHeader.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  avatarVariant: PropTypes.string,
  textVariant: PropTypes.string,
};

export default DrawerHeader;
