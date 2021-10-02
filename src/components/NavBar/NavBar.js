//local
import React,{useState}  from 'react';
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

//externals 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily:" 'Bebas Neue', cursive",

    },
  }));


const NavBar = () => {
    const classes = useStyles();
    const [categories,setCategories] = useState([
      {
        categoria: 'monografias',
        id: 1
      },
      {
        categoria: 'filosofia',
        id: 2
      }
    ]);



    return (
        <header>
            <AppBar className="nav-1" position="sticky" style={{boxShadow:"10px 5px 11px black", textShadow:" 1px 1px 2px black"}}>
                <Toolbar>

                    <IconButton >
                      <Link to="/" style={{textDecoration: "none"}}>
                      <LocalLibraryIcon sx={{ fontSize: 40 }} />
                      </Link>
                    </IconButton>
                    
                    <Typography className={classes.title} style={{fontSize:"20px"}}>
                        Libreria Pancho
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Tienda</Button>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (

                        <React.Fragment>
                          <Button color="inherit" {...bindTrigger(popupState)}>
                            Categorias
                          </Button>
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={()=>{popupState.close()} }>
                              <Link to="/category" style={{textDecoration: "none"}}>Todo</Link>
                            </MenuItem>

                            {categories.map((cat)=>{
                              return (<MenuItem key={cat.id} onClick={()=>{popupState.close();} }>
                                        <Link to={`/category/${cat.categoria}`} style={{textDecoration: "none"}}>{cat.categoria}</Link>
                                      </MenuItem>)})
                            }
                            
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                    <Button color="inherit">Contacto</Button>
                    <CartWidget/>
                </Toolbar>
 
            </AppBar>
        </header>  
  );
}

export default NavBar;
