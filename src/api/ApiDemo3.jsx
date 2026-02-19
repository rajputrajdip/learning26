import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const ApiDemo3 = () => {

    const{register, handleSubmit}= useForm()
    const submitHandler = async(data)=>{
        console.log(data)
        const res = await axios.post('https://node5.onrender.com/user/user/',data)
        console.log(res)
        console.log(res.data)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>form with api</h1>
        <form onsubmit={handleSubmit(submitHandler)}>
            <div>
                <label>name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>age</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>email</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>isactive</label><br/>
                true:<input type='radio' value='true' {...register('isactive')}></input>
                false:<input type='radio' value='false' {...register('isactive')}></input>
            </div>
        </form>
        <input type='submit'/>
    </div>
  )
}
