
import './App.css';
import TodoList from './Components/TodoList';
import { createTheme,ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
typography:{fontFamily:["Alexandria"]}
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:"flex",
     justifyContent:"center",alignItems:"center",
      height:"100vh",
      backgroundColor:"#191b1f",
      direction:"rtl"
      }}>
  <TodoList/>
  
    </div>
    </ThemeProvider>
  );
}

export default App;
