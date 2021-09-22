//local
import "./NavBar.css";
import img from '../../images/1.png';
import CartWidget from "../CartWidget/CartWidget";

//externals 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



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
            <AppBar className="nav-1" position="static">
                <Toolbar>

                    <IconButton >
                        <img className="icon-menu" src={img} alt="logo" />
                    </IconButton>
                    
                    <Typography variant="h6" className={classes.title}>
                        Libreria Pancho
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Tienda</Button>
                    <Button color="inherit">Carrito</Button>
                    <Button color="inherit">Contacto</Button>
                    <CartWidget />
                </Toolbar>
 
            </AppBar>
        </header>  
  );
}

export default NavBar;
