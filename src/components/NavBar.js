import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import "./NavBar.css";
import img from './../images/1.png'

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


const NavBar = () => {
    const classes = useStyles();
    return (
        <header>
            <AppBar style={{ background: '#773fff' }} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img className="icon-menu" src={img} alt="logo" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Libreria Pancho
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Tienda</Button>
                    <Button color="inherit">Carrito</Button>
                    <Button color="inherit">Contacto</Button>
                </Toolbar>
{/*
    <ul className="navbar-list">




 
    <li><Button color="white">Login</Button></li>
    <li><Button color="white">Tienda</Button></li>
    <li><Button color="white">Contacto</Button></li>
    <li><Button color="white">Carrito</Button></li> 
    
</ul>*/}

  
</AppBar>
</header>
      
      
    
  );
}

export default NavBar;
