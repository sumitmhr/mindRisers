import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState();


  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(response.data);
      setData((prev) => response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>

    </div>
  )
}

export default Home