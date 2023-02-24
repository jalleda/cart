import React from 'react'
import { useState, useEffect } from 'react'
import { Link, } from 'react-router-dom'

function Main() {
    var [product, setProduct] = useState([""])
    var[navigation,setnavigation]=useState([""])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    function detail(i) {
        alert(i)
    }
    return (
        <div>
            <div className='d-flex flex-wrap'>
                {
                    product && product.map((p, i) => {
                        return <div className='w-25 p-4 border border-2' >
                            <Link to={`/des/${p.id}`}>{p.id}</Link>
                            <img src={p?.image} alt="" width="280px" height="300px" onClick={() => { detail(i) }} />
                            <p>{p?.title}</p>
                            <button ></button>
                            <button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate({p}, {
            itemId:56,
            otherParam: 'anything you want here',
          });
        }}
      ></button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Main