import React from 'react'

export const Mapdemo2 = () => {
    var users=[
        {id:1,name:"raju",age:21,gender:"male"},
        {id:2,name:"rajat",age:23,gender:"male"},
        {id:3,name:"rajni",age:2,gender:"female"}
    ]
  return (
    <div>
        <h1>Mapdemo2</h1>
        {
            users.map((user)=>{
                return(
                   <li> {user.id}--{user.name}--{user.age}--{user.gender}</li>
                )
                
            })
        }
    </div>
  )
}
