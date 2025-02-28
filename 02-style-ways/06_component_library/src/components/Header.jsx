import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
      
      <AppBar position="static" sx={{bgcolor:"#fff59d", color:"#004d40"}}>
        <Toolbar sx={{justifyContent:"center"}}>
            <Typography variant="h2" > Mini-Blog </Typography>
        </Toolbar>
      </AppBar>
    );
   }

export default Header;