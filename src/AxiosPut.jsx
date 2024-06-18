import axios from 'axios';
import React, { useEffect,useState } from 'react'

function AxiosPut() {
    const [books,setBooks] = useState({
        title:"",
        body:""
    })
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>console.log(res));
    },[])

    function handleInput(event){
        setBooks({...books,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/posts/1',{books}).then((res)=>console.log(res))
        .catch((error)=>console.log(error));
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

export default AxiosPut
