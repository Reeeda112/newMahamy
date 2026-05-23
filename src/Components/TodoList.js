import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from './Todo';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";
import {useState} from "react"

const initialtodos=[
    { id:uuidv4(),
      title:"المهمه الاولي ",  
      details:" قراءه القراءن الكريم",
      isCompleleted:false
    }
,
    {  
     id:uuidv4(),
      title:"المهمه التانيه",  
      details:"صلاه خمس فروض",
      isCompleleted:false
    }
    ,
    {id:uuidv4(),
      title:"المهمه التالته",  
      details:"ممارسه الرياضه ",
      isCompleleted:false
    
 }

]

 
export default function TodoList() {
    const [titleInput,setTitleInput]=useState("")
    const [todo,settodo]=useState(initialtodos)
    const todoJsx=todo.map((x)=>{return<Todo key={x.id} title={x.title} details={x.details}/>})
    function handeltodo(){ 
   const newTodo={
    id:uuidv4(),
    title:titleInput,
    details:"",
    isCompleleted:false
}
    settodo([...todo,newTodo])
 }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h2'>مهامى </Typography>
        <Divider/>
  <ToggleButtonGroup
      color="primary"
      exclusive
      aria-label="Platform"
      style={{marginTop:"20px", direction:"ltr"}} 
    >
      <ToggleButton value="right">الغير منجز</ToggleButton>
      <ToggleButton value="center">المنجز</ToggleButton>
      <ToggleButton value="left" >الكل</ToggleButton>
    </ToggleButtonGroup>
    {todoJsx}
     {/*  input and submit button */}
<Grid container spacing={2} style={{ marginTop:"10px"} }>
        <Grid size={8} >
        <TextField style={{width:"100%"}} id="outlined-basic" label="عنوان المهمه" variant="outlined" 
        value={titleInput} onChange={(e)=>{setTitleInput(e.target.value)}} />
        </Grid>
        <Grid size={4} >
       <Button style={{width:"100%", height:"100%"}} variant="contained"
       onClick={()=>{handeltodo()}}
       >اضافة</Button>
        </Grid>
         </Grid>
{/* ==========finish  input and submit button ==========*/}
    </CardContent>
 
    </Card>
        
      </Container>
    </React.Fragment>
  );
}

