import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Grid from '@mui/material/Grid';
export default function Todo( {title,details}){
    return(
        <>
        <Card  className='TodoCard' sx={{ minWidth: 275, backgroundColor:"#283593" ,color:"white",marginTop:"10px"}}>
      <CardContent>
        <Grid container spacing={2} >
        <Grid size={8}>
        <Typography  variant='h5'> {title}</Typography>
         <Typography  variant='h6'> {details}</Typography>

        </Grid>
        <Grid xs={4} >
        <IconButton className='iconbtn' aria-label="delete" style={{backgroundColor:"white",color:"red", border:"red solid 3px " }}>
        <DeleteIcon />
      </IconButton>
       <IconButton className='iconbtn' aria-label="done"style={{backgroundColor:"white",color:"#8bc34a", border:"#8bc34a solid 3px " }} >
      <CheckTwoToneIcon/>
      </IconButton>
             <IconButton className='iconbtn' aria-label="edit" style={{backgroundColor:"white",color:"#4254dd", border:"#4254dd solid 3px " }}>
      <EditTwoToneIcon/>
      </IconButton>
      
        </Grid>
         </Grid>
      </CardContent>
  
    </Card>
        
        
        </>
    )
}