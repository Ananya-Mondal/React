import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Error from './Components/Error';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Users from './Components/Users';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Private from './Components/Private';

function App() {
  return (
    <div className='App'>
      <Menu />    
       <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Create' element={<Create />}/>
        <Route path='/' element={<Private />}>
              <Route path='Users' element={<Users />}/>
              <Route path='Edit' element={<Edit />}/>
        </Route>
        <Route path='/*' element={<Error />}/>
      </Routes>
     
    </div>
  ) 
}

export default App
