import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '../styles/styles';         // <-- Import

const Component = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>                 
      <Typography className={classes.text}>I am a text</Typography>
    </Box>
  );
};

export default Component; 