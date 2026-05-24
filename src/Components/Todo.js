import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Grid from '@mui/material/Grid';
import { useContext,useState } from 'react';
import { TodosContext } from '../Contexts/TodosContext';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
export default function Todo( {todo,handelDoneBtn}){
  const[showDialog,setShowdialog]=useState(false)
   const[showDialogubdate,setShowdialogupdate]=useState(false)
 const {todos,settodos}=useContext(TodosContext)

 const[updateItem,setUpdateItem]=useState({title:todo.title,details:todo.details})
function handleDoneBtn(){
 const UpdatedTodos=todos.map((T)=>
        {
            if(todo.id===T.id)
             {T.isCompleted=!T.isCompleted}
            return T 
            })
     settodos(UpdatedTodos)
      localStorage.setItem("todos",JSON.stringify(UpdatedTodos))
}
 function handelhidDialog(){
setShowdialog(false)
}
 function handelhidDialogupdate(){
setShowdialogupdate(false)
}
function deleteTask() {
  const UpdatedTodos = todos.filter((x) => {
    return x.id !== todo.id
  })

  settodos(UpdatedTodos)
 localStorage.setItem("todos",JSON.stringify(UpdatedTodos))

}
function handelUpdateConfirm(){
// eslint-disable-next-line array-callback-return
const UpdatedTodos=todos.map((t)=>{
 if(t.id===todo.id){
return {...t,title:updateItem.title ,details:updateItem.details}}
else return t
})
settodos(UpdatedTodos)
setShowdialogupdate(false)

}
    return(
        
        <>

{/* delete Modal */}
 <Dialog style={{direction:"rtl"}}
        open={showDialog}
         onClose={handelhidDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل ترغب في حذف المهمه ؟"}
        </DialogTitle>
      
        <DialogActions>
          <Button    autoFocus onClick={deleteTask}>
           نعم احذفه
          </Button>
          <Button onClick={()=>{setShowdialog(false)}}>تراجع</Button>
        </DialogActions>
      </Dialog>

{/* ============delete Modal =======*/}
{/* update modal */}
<Dialog   open={showDialogubdate} onClose={handelhidDialogupdate}>
        <DialogTitle>تعديل المهمه</DialogTitle>
     
        
          <form id="subscription-form">
            <TextField
            style={{padding:"5px"}}
              autoFocus
              id="outlined-basic"
              margin="dense"
              label="عنوان المهمه"
              fullWidth
             variant="outlined"
             value={updateItem.title}
             onChange={(e)=>{
              setUpdateItem({...updateItem, title:e.target.value})
             }}
            />
               <TextField style={{padding:"5px"}}
               id="outlined-basic"
              autoFocus
              margin="dense"
              label="التفاصيل"
              fullWidth
              variant="outlined"
              value={updateItem.details}
             onChange={(e)=>{
              setUpdateItem({...updateItem, details:e.target.value})
             }}
            />
          </form>
        <DialogActions>
          <Button onClick={handelhidDialogupdate} >الغاء</Button>
          <Button  onClick={handelUpdateConfirm}  form="subscription-form">
            تأكيد التعديل 
          </Button>
        </DialogActions>
      </Dialog>
{/* ======update Modal======== */}

        <Card  className='TodoCard'  sx={{ minWidth: 275, backgroundColor:"#283593" ,color:"white",marginTop:"10px"}}>
      <CardContent>
        <Grid container spacing={2} >
        <Grid size={8}>
        <Typography  variant='h5'> {todo.title}</Typography>
         <Typography  variant='h6'> {todo.details}</Typography>

        </Grid>
        <Grid xs={4} >
        <IconButton className='iconbtn' aria-label="delete" style={{backgroundColor:"white",color:"red", border:"red solid 3px " }} onClick={()=>{
          setShowdialog(true) 
        }}>
        <DeleteIcon />
      </IconButton>
       <IconButton className='iconbtn' aria-label="done"style={{
        backgroundColor: todo.isCompleted?"#8bc34a":"white"
       ,color: todo.isCompleted?"white":"#8bc34a",
        border:"#8bc34a solid 3px " }} 
        onClick={()=>{handleDoneBtn()}} >
      <CheckTwoToneIcon/>
      </IconButton>
             <IconButton onClick={()=>{setShowdialogupdate(true)}} className='iconbtn' aria-label="edit" style={{backgroundColor:"white",color:"#4254dd", border:"#4254dd solid 3px " }}>
      <EditTwoToneIcon/>
      </IconButton>
      
        </Grid>
         </Grid>
      </CardContent>
  
    </Card>
        
        
        </>
    )
}