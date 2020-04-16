import React from 'react';
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css'
import Book from './Components/Home/Book';
import Portal from './Components/Dashboard/Portal';
import Appointments from './Components/Dashboard/Appointment';
import Patient from './Components/Dashboard/Patient';

function App() {
  return (
      <BrowserRouter>
        <div>
         <Navbar></Navbar>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path='/portal' exact component={Portal}/>
           <Route path='/portal/appointment' exact component={Appointments}/>
           <Route path='/portal/patient' component={Patient}/>
           <Route path='/portal/patients' component={Patient}/>
           <Route path="/book" component={Book}/>
         </Switch>
       </div>
      </BrowserRouter>
  );
}

export default App;
