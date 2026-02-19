import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './component/Navbar';
import { HeaderComponent } from './component/HeaderComponent';
import { FooterComponent } from './component/FooterComponent';
import  ContentComponent  from './component/ContentComponent';
import { Mapdemo1 } from './component/Mapdemo1';
import { Mapdemo2 } from './component/Mapdemo2';
import { Mapdemo3 } from './component/Mapdemo3';
import { Netflixmovie } from './component/Netflixmovie';
import { Netflixhome } from './component/Netflixhome';
import { Netflixshow } from './component/Netflixshow';
import { Teams } from './component/Teams';
import { Routes,Route } from 'react-router-dom';
import { UseStateDemo1 } from './component/UseStateDemo1';
import { UseStateDemo2 } from './component/UseStateDemo2';
import { Employees } from './component/Employees';
import { FormDemo1 } from './form/FormDemo1';
import { FormDemo2 } from './form/FormDemo2';
import { FormDemo3 } from './form/FormDemo3';
import { FormDemo4 } from './form/FormDemo4';
import { ApiDemo1 } from './api/apidemo1';
import { OmdbMovie } from './api/OmdbMovie';
import {MovieDetail}from './api/MovieDetail';
import { ApiDemo2 } from './api/ApiDemo2';
import { ApiDemo3 } from './api/ApiDemo3';
//import './App.css'

function App() {
  /*
var name = "Rajput Rajdipsinh Dineshji"
var degree = "purchasing a b.tech degree from GEC Modasa"
var age = 21;
var likecricket =true
var Rajdip={
  TENthpercentage : "75",
  TWELTHpercentage : "65",
  currentCGPA : 6.70
  
} */

  return (
    <div>
      <Navbar></Navbar> 
      <Routes>
        <Route path='/team' element ={<Teams/>}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<useStatedemo3/>}></Route>
        <Route path="/Employees"element={<Employees/>}></Route>
        <Route path="/Formdemo1"element={<FormDemo1/>}></Route>
        <Route path="/Formdemo2"element={<FormDemo2/>}></Route>
        <Route path="/Formdemo3"element={<FormDemo3/>}></Route>
        <Route path="/Formdemo4"element={<FormDemo4/>}></Route>
        <Route path="/ApiDemo1" element={<ApiDemo1/>}></Route>
        <Route path="/omdbmovie" element={<OmdbMovie/>}></Route>
        <Route path="/Movie/:id" element={<MovieDetail/>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path="/apidemo3" element={<ApiDemo3/>}></Route>
        
        </Routes>
    </div>
  );
} 

export default App; 
