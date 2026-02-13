import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
const {register,handleSubmit} = useForm()
const [useData, setuseData] = useState('')
const submitHandler = (data)=>{
  console.log(data);
  setuseData(data)
  
}

  return (
    <div style={{textAlign:'center'}}>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
    <div>
      <label>Name</label>
      <input type='Text' placehoder='Enter Name' {...register("firstname")}></input>
    </div>
    <div>
      <label>age</label>
      <input type='Text'{...register("age")}></input>
      </div> 
      <div>
      <label>gender</label><br/>
      male:<input type = 'radio' valaue='male' {...register("gender")}></input>
      female:<input type ='radio' value='female' {...register("gender")}></input>
      </div>
      <div>
        <label>hobbies</label><br/>
        CHEESS:<input type='checkbox' value='chess' {...register("hobbies")}></input>
        SLEEPING:<input type='checkbox' value='sleeping' {...register("hobbies")}></input>
        CRICKET:<input type='checkbox' value='cricket' {...register("hobbies")}></input>
      </div>
      <div>
        <input type='submit' />
      </div>
      </form>
      <h1> name {useData.firstname}</h1>
      <h1>age {useData.firstname}</h1>
      <h1>gender {useData.gender}</h1> 
    
    </div>
  )
}

