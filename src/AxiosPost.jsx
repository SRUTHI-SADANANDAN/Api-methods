import axios from 'axios';
import React, { useState } from 'react'

function AxiosPost() {
    const [books,setBooks] = useState({
        title:"",
        body:""
    })

    function handleInput(event){
        setBooks({...books,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',{books})
        .then((res)=>{console.log(res)
          
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      Title: <input type="text" placeholder='enter title' onChange={handleInput} name='title'/>
      post: <input type="text" placeholder='enter post' onChange={handleInput} name='body'/>
      <button>click</button>
      </form>
    </div>
  )
}

export default AxiosPost
