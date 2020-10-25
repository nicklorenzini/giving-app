import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import {  createMuiTheme, withStyles, makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import {RotateLeft, Payment, ThreeSixty} from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Card from '../card';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

  
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
      margin: theme.spacing(1),
      background: '#fff'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


export default function PayNow() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: '',
    fund: 'Church Offering Fund',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
 
  return (
    <div className="card-form">
        <div className="card-form__row">
        <center>
        <FormControl className={classes.button} variant="filled" color='primary'>
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            size="large"
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      <ColorButton
        variant="contained"
        color= 'primary'
        size="large"
        className={classes.margin}
        startIcon={<Payment />}
        onClick={handleClick}
      >
        GIVE NOW
      </ColorButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Payment of ${values.amount} submitted successfully to {values.fund}.
        </Alert>
      </Snackbar>
      </center>
      </div>
      <div className="card-form__row">
                    <div>
                        <div className="card-form__group">
                            <label
                                htmlFor="fundname"
                                className="card-input__label"
                            >
                                Which fund?
                            </label>
                            <select
                                className="card-input__input -select" value={values.fund.default} onChange={handleChange('fund')}
                                >
                                <option>
                                    Church Offering Fund
                                </option>
                                <option>
                                    Samaritan's Purse
                                </option>
                                <option>
                                    Wildfire Relief Fund
                                </option>
                            </select>
                            </div>
                        </div>
                        </div>
                        </div>
  );
}