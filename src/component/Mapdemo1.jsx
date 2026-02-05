import React from 'react'

export const Mapdemo1 = () => {
let cars=["bmw","Audi","merc","rangerover","rr","defender"]

  return (
    <div>
        <h1>map demo 1</h1>
        {
        cars.map((car)=>{
        return(
            <h1>{car}</h1>
        )
        })
        }   
    </div>
  )
}
