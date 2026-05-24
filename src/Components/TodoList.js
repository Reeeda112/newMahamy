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
import { v4 as uuidv4 } from "uuid";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TodosContext } from '../Contexts/TodosContext';
import {useState} from "react"
import { useContext } from 'react';
import { useEffect } from 'react';
 
export default function TodoList() {
    const {todos,settodos}=useContext(TodosContext)
    const [titleInput,setTitleInput]=useState("")
     const[changetype,setChangetype]=useState("all")
  
    const completed=todos.filter((x)=>{return x.isCompleted})
    const Notcompleted=todos.filter((x)=>{return !x.isCompleted})
    let DisplayTodosType=todos
    if(changetype==="completed"){DisplayTodosType=completed}
    else if(changetype==="notCompleted"){DisplayTodosType=Notcompleted}
    else{DisplayTodosType=todos}
    const todoJsx=DisplayTodosType.map((x)=>{return<Todo  key={x.id}  todo={x} />})
    useEffect(()=>{
 const storageTodo=JSON.parse(localStorage.getItem("todos"))
 settodos(storageTodo)
    },[])
    function handeltodo(){ 
   const newTodo={
    id:uuidv4(),
    title:titleInput,
    details:"",
    isCompleted:false
}

const UpdatedTodos=[...todos,newTodo]
  settodos(UpdatedTodos)
  localStorage.setItem("todos",JSON.stringify(UpdatedTodos))
  setTitleInput("") 
 }

 function changeDisplayeType(e){
setChangetype(e.target.value) 
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
     value={changetype}
     onChange={changeDisplayeType}
      color="primary"
      exclusive
      aria-label="Platform"
      style={{marginTop:"20px", direction:"ltr"}} 
    >
      <ToggleButton value="notCompleted">الغير منجز</ToggleButton>
      <ToggleButton value="completed">المنجز</ToggleButton>
      <ToggleButton value="all" >الكل</ToggleButton>
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

