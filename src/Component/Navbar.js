import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import image from './a.png'
import './card.css'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
        <img src={image} alt=""  className="img"/>
          <Typography variant="h6" className={classes.title}>
           <span className="corona"><span className="c">C</span>orona</span>  <span className="track">Tracker</span>
          </Typography>
          <Link className="nav" color="inherit"  to='/'>Home</Link>
          <Link className="nav" color="inherit"  to='/Record'>Data</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
