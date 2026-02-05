import React from 'react'

export const Mapdemo3 = () => {
     var users=[
        {id:1,name:"raju",age:21,gender:"male"},
        {id:2,name:"rajat",age:23,gender:"male"},
        {id:3,name:"rajni",age:20,gender:"female"},
        {id:4,name:"shuhani",age:19,gender:"female"}
    ]
  return (
    <div>
       <table border={2}>
        <thead>
            <tr>
                <th>id</th>
                 <th>name</th>
                  <th>age</th>
                   <th>gender</th>

            </tr>
        </thead>
        
            <tbody>
                {
                   users.map((user)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                            </tr>

                    
                   })
                }
            </tbody>
        
        </table> 
    </div>
  )
}
