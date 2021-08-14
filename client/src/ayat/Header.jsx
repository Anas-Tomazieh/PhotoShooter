import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { navigate } from '@reach/router';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles, createTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Logo from './Logo';
import Button from '@material-ui/core/Button'
import axios from "axios"
import Cookies from 'js-cookie'



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,

  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const home = (e) => {
  e.preventDefault();
  navigate("/")
}

const login = (e) => {
  e.preventDefault();
  navigate("/login")
}
const chat = (e) => {
  e.preventDefault();
  navigate("/chat");
}
const postPhoto = (e) => {
  e.preventDefault();
  navigate("/createPhoto/6117a417f1bbf84a94e77bcf");
}


export default function SearchAppBar() {

  const classes = useStyles();

  const logout = user => {
    axios.get('http://localhost:8000/api/logout', user)
      .then(res => {
        Cookies.remove('userId')
        navigate("/login")
      })
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundImage: "linear-gradient(to right, #5fc3e4,#e55d87)" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button color="inherit" onClick={home}>Home</Button>
            {Cookies.get('userId') === undefined ?
              <>
                <Button color="inherit" onClick={login}>Log in</Button>
                <Button color="inherit" onClick={postPhoto}>Post A Photo</Button>
              </>
              :


              <Button color="inherit" onClick={logout}>Log out</Button>
              // <Button color="inherit" onClick={postPhoto}>Post A Photo</Button>
            }
            <Button color="inherit" onClick={chat}>Start A Chat with Us</Button>




            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
