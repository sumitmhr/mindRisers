import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();




  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setLoad(false);
      setData((prev) => response.data)
    } catch (err) {

      setLoad(false);
      setErr(err.message);

    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading.....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }




  return (
    <div className='p-4'>
      {data && data.map((post) => {
        return <div key={post.id}>
          <h1>Title : {post.title}</h1>
          <p>Body : {post.body}</p>
          <hr className='h-10' />

        </div>
      })}

    </div>
  )
}

export default Home