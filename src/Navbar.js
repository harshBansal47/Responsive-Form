import { AppBar, Toolbar,Box ,Typography,Stack,Button,Divider} from '@mui/material';
import { createTheme, ThemeProvider ,styled} from '@mui/material/styles';
import React from 'react';
import Logo from './Logo.png';
import { pink,blueGrey} from '@mui/material/colors'; 
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';


const theme = createTheme({
  typography: {
    fontFamily: " 'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#f5f6f7",
    },
    secondary: {
      main: '#ab47bc',
    },
  },
  components:{
    MuiTypography:{
      styleOverrides:{
         h3:{
          fontFamily:"'Edu VIC WA NT Beginner', cursive",
          color:'#cc9edb',
          '&:hover':{
            color:'#000',
            transition:'1s',
          }
        }
        
      }
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          boxShadow:'none',
        },
      },
    },
  },
});

const ColorButton= styled(Button)(({bgcolor})=>({
  backgroundColor:bgcolor[600],
  color:bgcolor[50],
  width:'200px',
  height:{md:"40px",
    lg:'45px'},
  fontSize:'15px',
  fontWeight:'400',
  fontFamily:"'Lato', sans-serif",
  '&:hover':{
    backgroundColor:bgcolor[900],
  },
}))

const Navbar = () => {
  // const [mediumSize,setMediumSize] = useState(false);
  // if()){
  //   setMediumSize(true);
  // }else{
  //   setMediumSize(false);
  // }
  return (
    <ThemeProvider theme = {theme}>
      <AppBar position='sticky'>
      <Toolbar sx = {{justifyContent:'space-between'}}>
      <Box sx = {{display :'flex',justifyContent:'center', alignItems:'center'}}>
      <img src = {Logo} alt = "" style = {{height:"55px",width:"55px",margin:'10px 20px 10px 20px'}}/>
      <Typography variant = 'h3'>ATools</Typography>
      </Box>
        {useMediaQuery(theme.breakpoints.down('md'))?<MenuIcon/>:<Stack direction={{ xs: 'column', sm: 'row' }} spacing={{sm:2, md:3 }} sx = {{marginRight:{sm:'20px',md:'25px',lg:'35px'}}}>
        <ColorButton variant="contained" bgcolor = {blueGrey}>Start Free Trial</ColorButton>
        <ColorButton variant="contained" bgcolor = {pink}>Login</ColorButton>
        </Stack>}
      </Toolbar>
      <Divider  />
      <Divider  />
    </AppBar>
    {/* for responsive purpose */}
    </ThemeProvider>
    );
}
export default Navbar;