import axios from 'axios'
import React from 'react'

const Home = () => {

  const person = {
    name: 'ram'
  };

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((val) => {
      console.log(val.data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log('hello users')
    });

  return (
    <div>

    </div>
  )
}

export default Home