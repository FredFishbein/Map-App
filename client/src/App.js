import React from 'react';
import {
  Button, 
  makeStyles, 
  Typography, 
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import logo from './img/logo.jpg';
import logo3 from './img/logo3.svg';
import MapContainer from './components/MapContainer';
import Forecast from './components/Forecast/Forecast';


const useStyles = makeStyles((theme) =>({

textStyles:{
fontStyle: "oblique",
color:"white",
textAlign:"Center",
variant:"h1",
margin:"100px 0 100px 100px",

},

buttonStyles: {
color:"green",
backgroundColor:"yellow",
width:"300px",
margin:"20px 20px 20px 200px",
},

sliderStyle: {
width:700,
color:"#00587a",
marginBottom:"100px"
},

cardRoot: {
maxWidth: 375,
  
},

bullet: {
display: 'inline-block',
margin: '0 2px',
transform: 'scale(0.8)',
},

cardtitle: {
fontSize: 14,
},

pos: {
marginBottom: 12,
},

AppBarRoot: {
flexGrow: 1,
},

menuButton: {
marginRight: theme.spacing(2),
},

title: {
flexGrow: 1,
color: "#f6d887"
},

avatarroot: {
display: 'flex',
'& > *': {
margin: theme.spacing(1),
},
},
large:{
height:"50px",
width:"50px"
},

badgeroot: {
'& > *': {
margin: theme.spacing(1),
marginRight:"20px",
[theme.breakpoints.down('sm')]:{
  display:'none',
}
},
},

menu:{
  backgroundColor:"black"
},

logo3:{
  height:"50px",
  paddingRight:"10px"
},

}));


 function App() {

  const classes = useStyles();
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
  setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  
  return (

    <div className="App">
    <div className={classes.AppBarRoot}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={logo3} className={classes.logo3} alt="img"/>
          <Typography variant="h6" className={classes.title}>
            Home to you
          </Typography>
          <div className={classes.badgeroot}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          </div>
          <div className={classes.avatarroot}>
          <Avatar alt="Fred Fishbein" className={classes.large} src={logo} />
          </div>
          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Login</Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
    </div>
    <MapContainer />
    <main>
    <Forecast />
      </main>
      <footer>
      </footer>
    </div>
  );
}
export default App;
  




