import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState();


  const [person, setPerson] = useState();

  const getData = async () => {
    setTimeout(() => {
      setPerson({ name: 'Sumit' });
    }, 2000);
    // try {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   setData((prev) => response.data)
    // } catch (err) {
    //   console.log(err);
    // }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(person);


  return (
    <div>
      {/* "?" = data na aaye samma ko lagi "2000ms"safety. */}
      <h1>{person?.name}</h1>

       {/* Conditional Rendering
      <h1>{person && person.name}</h1> */}

      {/* Cannot use this because the value is undefined for 2000ms and browser crashes.
      <h1>{person.name}</h1>  */}
    </div>
  )
}

export default Home