import React from "react";
import { Card, CardContent, CardMedia, Typography} from "@mui/material";
import firstDressPic from "../Assets/Images/weed2.jpg";

const EditProduct: React.FC = () => {
    return(
        <Card> 
         <CardMedia  sx={{ height: 140 }}
         image="/static/images/cards/contemplative-reptile.jpg"
         title="green iguana" /> 
           
           <CardContent>
             <Typography> Product Name</Typography>
             <Typography>Subtitle </Typography>
             <Typography>Decription </Typography>
             <Typography>Price </Typography>
             <Typography>Size</Typography>
             <Typography> QTY </Typography>
           </CardContent>
        </Card>
     );
 }
 
 export default EditProduct;
 
 