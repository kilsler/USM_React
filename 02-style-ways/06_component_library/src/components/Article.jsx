import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Article({post}) {


    return (
      <Accordion sx={{ maxWidth: 600, m:5, p: 3 }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"  
        >
          <Typography component="span">{post.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {post.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    );
   }

   export default Article;