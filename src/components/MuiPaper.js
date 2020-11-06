import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      marginRight: theme.spacing(4),
      marginBottom: theme.spacing(5),
      width: theme.spacing(16),
      // height: theme.spacing(16),
    },
  },
  other: {
    color: 'red',
    backgroundColor : 'aqua',
    padding: theme.spacing(4)
  }
}));

export default function SimplePaper({ confirmed, recovered, deaths }) {
  const classes = useStyles();

  const child1 = `Confirmed: ${confirmed}`
  const child2 = `Recovered: ${recovered}`
  const child3 = `Total Deaths: ${deaths}`
  return (
    <div className={classes.root}>
      <Paper className={classes.other} children={child1} elevation={3} />
      <Paper className={classes.other} children={child2} elevation={3} />
      <Paper className={classes.other} children={child3} elevation={3} />
    </div>
  );
}
