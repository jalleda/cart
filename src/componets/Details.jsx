import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Details() {
    var [item,setItem]=useState([''])
   const z=useParams()
   console.log(z)
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${z.id}`)
    .then(res => res.json())
    .then(data => setItem(data))
}, [z.id])
   
  return (
    <div>
        <div className='p-5 border border-1'>
                <p>Item id:{item?.id}</p>
                <p> Title:{item?.title}</p>
            <img src={item?.image} alt="" width="200px "  height="200px"/>
            <p>Price:{item?.price}</p>
            <p>Rating:{item?.rating?.rate}</p>
            <p>Description: {item?.description}</p>
        </div>
        
    </div>
  )
}

export default Details