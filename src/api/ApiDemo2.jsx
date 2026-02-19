import React from 'react'
import axios from 'axios'
import { Await } from 'react-router-dom'

export const ApiDemo2 = () => {

  const adduser = async()=>{
    const userObj={
      name:"raju",
      age:22,
      email:"raju@gmail.com",
      password:"raj@123",
      isActive:true
    }
    
      try{
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res)
        console.log(res.data)
      }catch(err){
        console.log(err)
        alert("data not submitted")
      }
  }




  return (
    <div style={{textAlign:'center'}}>
        <h1>post request</h1>
        <button onClick={()=>adduser()} >ADD</button>
    </div>
  )
}
