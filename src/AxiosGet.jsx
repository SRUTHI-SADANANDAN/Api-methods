import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosGet() {

    const [post,setPost] = useState([])

    const getItems = async ()=>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response);
        setPost(response.data)
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{console.log(res)
        setPost(res.data)})
    },[])

  return (
    <div>
      <button onClick={getItems}>Get</button>
      {post.map((x)=>(
            <h1>{x.title}</h1>
      ))}
      
    </div>
  )
}

export default AxiosGet
