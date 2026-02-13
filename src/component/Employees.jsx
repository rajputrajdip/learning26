import React from 'react'
import {Employeeslist} from './Employeeslist';

export const Employees = () => {
    var title = "title"

    var company = {
      name:"tcs",
      location:"ahmedabad"
    };
    var employees = [
      {id:1,name:"raj",age:21},
      {id:2,name:"dip",age:22 },
      {id:3,name:"rajat",age:20}
    ] 
  return (
    <div style={{textAlign:'center'}}>
        <h1>Emoloyees</h1>
        <Employeeslist title ={title} company ={company} employees = {employees}></Employeeslist>
    </div>
  )
}
