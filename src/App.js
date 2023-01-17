
import './App.css';
import RegPage from './components/RegPage';
import TeacherReg from './components/TeacherReg';
import Orgsuccess from './Success/Orgsuccess';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login/Login';



function App() {
  return (
    <>

     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<RegPage/>}/>
    <Route path='/successform' element={<Orgsuccess/>}/>





    </Routes>
    
    
    
    
    
    
    
    
    </BrowserRouter> 
    {/* <RegPage/> */}
  
    {/* <TeacherReg/> */}
    {/* <MDBlog/> */}
   {/* <Orgsuccess/> */}
   {/* <Login/> */}
    </>
  );
}

export default App;
