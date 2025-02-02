import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'

const Home = () => {

  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [isPending, startTransition] = useTransition();

  const getData = () => {

    startTransition(async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData((prev) => response.data)
      } catch (err) {
        setErr(err.message);

      }
    })

  }


  useEffect(() => {
    getData();
  }, []);

  if (isPending) {
    return <h1>Loading.....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }




  return (
    <div className='p-4'>
      {data && data.map((post) => {
        return <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr className='h-10' />

        </div>
      })}

    </div>
  )
}

export default Home