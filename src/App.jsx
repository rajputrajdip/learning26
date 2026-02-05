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
        <Route path='/team' element ={<teams/>}></Route>
      </Routes>
    </div>
  );
} 

export default App; 
