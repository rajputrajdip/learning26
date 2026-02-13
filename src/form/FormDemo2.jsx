import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
const {register,handleSubmit} = useForm();
const [userData,setuserData] = useState({})
const [issubmit,setissubmit] = useState(false)
const submitHandler = (data)=>{
    console.log(data);
    setuserData(data)
    setissubmit(true)
}
  return (
    <div style={{textAlign:'center'}}>
        <h1>student ragistration form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>name</label>
                <input type='Text' placeholder='enter your name' {...register("fullname")}></input>
            </div>
              <div>
                 <label>emaii id</label>
                 <input type='Text' {...register("email id")}></input>
             </div>
             <div>
                <label>password</label>
                 <input type='password' placeholder='password' {...register("password")}></input>
             </div>
             <div>
                 <label>gender</label><br/>
                     male:<input type = 'radio' value='male' {...register("gender")}></input>
                    female:<input type ='radio' value='female' {...register("gender")}></input>
             </div>
             <div>
                <input type='submit'></input>
             </div>
            {
                    issubmit == true && <div>
                    <h1>{userData.fullname}</h1>
                </div>
            }
        </form>
    </div>
  )
}
