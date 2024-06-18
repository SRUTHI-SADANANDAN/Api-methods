import axios from 'axios'
import './App.css';
import {useEffect, useState} from 'react'
import AxiosGet from './AxiosGet';
import AxiosPost from './AxiosPost';
import AxiosDelete from './AxiosDelete';
import AxiosPut from './AxiosPut';
function App() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,10)))
  },[])
  return (
    <div className='App'>
        {/* <h1>Fetch Methods</h1>
        {posts.map((post,id)=>(
          <div key={id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          </div>
        ))} */}
        {/* <AxiosGet/> */}
        {/* <AxiosPost/> */}
        {/* <AxiosDelete/> */}
        <AxiosPut/>
    </div>
  );
}

export default App;
