//local
import React,{useState, useEffect}  from 'react';
import {Link} from "react-router-dom";

//components
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import db from '../../firebase';
import {collection, getDocs } from 'firebase/firestore';
import CartIcon from '../CartIcon/CartIcon';

//externals 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily:" 'Poppins', cursive",
    },
  }));


const NavBar = () => {
    const classes = useStyles();
    const [categories,setCategories] = useState([]);
    
    async function getCategories(db){
      const categoriesCol = collection(db, 'categories');
      const categoriesSnapshot = await getDocs(categoriesCol);
      const categoriesList = categoriesSnapshot.docs.map(doc => doc.data())
      return categoriesList;
    }
  useEffect(()=>{
    getCategories(db).then((res)=>{
      setCategories(res)
      console.log("categorias", res)
    })

  },[])

  //BREAKPOINTS//
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  ////////////////

  return (
    <header>
        <AppBar className="nav-1" position="sticky" style={{ color: "black", border: "2px solid rgb(46 22 3)"}}>
          <Toolbar>

            <IconButton >
              <Link to="/" style={{textDecoration: "none"}}>
              <LocalLibraryIcon sx={{ fontSize: 40 }} />
              </Link>
            </IconButton>
            <Typography className={classes.title} style={{fontSize:"20px"}}>
                Libreria Pancho
            </Typography>      

            {isMatch ? 
              <>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <MenuIcon variant="contained" {...bindTrigger(popupState)}/>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}><Button color="inherit">Inicio</Button></MenuItem>
                      <MenuItem style={{display:"flex", flexDirection:"column"}} >

                        <Button color="inherit">
                          Categorias
                        </Button>
                        <div className="menu-container">
                        <MenuItem >
                          <Link to="/category" style={{textDecoration: "none"}}>Todo</Link>
                        </MenuItem>

                        {categories.map((cat)=>{
                          return (<MenuItem key={cat.id}>
                                    <Link to={`/category/${cat.name}`} style={{textDecoration: "none"}}>{cat.name}</Link>
                                  </MenuItem>)})
                        }
                        </div>
                          
                      </MenuItem>
                      <MenuItem onClick={popupState.close}><Button color="inherit">Contacto</Button></MenuItem>
                      <MenuItem ><CartIcon/></MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
              </> 
              : 
              <>
              <Button color="inherit">
                <Link to="/category" style={{textDecoration: "none"}}>Inicio</Link>
              </Button>
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
                                  <Link to={`/category/${cat.name}`} style={{textDecoration: "none"}}>{cat.name}</Link>
                                </MenuItem>)})
                      }
                      
                    </Menu>

                  </React.Fragment>
                )}
              </PopupState>
              <Button color="inherit">Contacto</Button>
              <CartWidget/>
              </>
            }
          </Toolbar>
        </AppBar>
    </header>  
  );
}

export default NavBar;
