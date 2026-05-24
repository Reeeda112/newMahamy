
import './App.css';
import TodoList from './Components/TodoList';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { TodosContext } from './Contexts/TodosContext';
import { v4 as uuidv4 } from "uuid";
import {useState} from "react"
const theme = createTheme({
typography:{fontFamily:["Alexandria"]}
});
const initialtodos=[
    { id:uuidv4(),
      title:"المهمه الاولي ",  
      details:" قراءه القراءن الكريم",
      isCompleted:false
    }
,
    {  
     id:uuidv4(),
      title:"المهمه التانيه",  
      details:"صلاه خمس فروض",
      isCompleted:false
    }
    ,
    {id:uuidv4(),
      title:"المهمه التالته",  
      details:"ممارسه الرياضه ",
      isCompleted:false
    
 }

]

function App() {
  const [todos,settodos]=useState(initialtodos)
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:"flex",
     justifyContent:"center",alignItems:"center",
      height:"100vh",
      backgroundColor:"#191b1f",
      direction:"rtl"
      }}>
        
  <TodosContext.Provider value={{todos,settodos}}>
    <TodoList/>
  </TodosContext.Provider>
    </div>
    </ThemeProvider>
  );
}

export default App;
