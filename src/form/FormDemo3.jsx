import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
const {register,handleSubmit,formState:{errors}}=useForm()
console.log("errors...",errors);
   
 const validationSchema = {
  ageValidator:{
    required:{
      value:true,
      message:"age is required"
    },
    min:{
      value:18,
      message:"minimum age is must be 18"
    },
    max:{
      value:50,
      message:"maximum length is 50"
    }

  }
 }


const submitHandler = (data)=>{
  alert("form is submitted");
  console.log(data)
}

  return (
    <div style={{textAlign:'center'}}>
      <h1>FOrmDemo3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>name:</label>
          <input type='text' {...register("name",{required:{value:true,message:"Name is required"}})}/>
          {errors.name && errors.name.message}
        </div>
        <div>
          <div>
            <label>age</label>
            <input type='text' {...register("age",validationSchema.ageValidator)}/>
            {errors.age && errors.age.message}
          </div>
          <div>
            <input type="Submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
