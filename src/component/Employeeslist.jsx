import React from 'react'

export const Employeeslist = (props) => {
    console.log("Employeeslist",props)
  return (
    <div>
        <h1>Employeeslist</h1>
        {props.title}
        <h1>{props.company.name}</h1> 
        <h1>{props.company.location}</h1> 
        <table className=' table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
            props.employees.map((emp)=>{
                return <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.age}</td>
                </tr>
                }) }
            </tbody>
        </table>
       
    </div>
  )
}
