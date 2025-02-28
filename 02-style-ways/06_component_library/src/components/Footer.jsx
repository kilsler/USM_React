import { AppBar, Typography } from "@mui/material";

function Footer() {
    return (
      <AppBar position="static" sx={{color:"#fff59d", bgcolor:"#004d40"}}>
        <Typography variant="h6" sx={{align:"center"}}>© {new Date().getFullYear()} Название компании. Все права защищены.</Typography>
      </AppBar>
    );
   }

export default Footer;