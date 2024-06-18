import axios from 'axios';
import React, { useEffect } from 'react'

function AxiosDelete() {


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>console.log(res));
    },[])

    const deleteItem = ()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(()=>{
            alert('item has deleted')
        })
    }
  return (
    <div>
      <button onClick={deleteItem}>delete</button>
    </div>
  )
}

export default AxiosDelete
