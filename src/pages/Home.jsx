import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';



const Home = () => {

  const [count, setCount] = useState(10);

  const decrement = () => {
    setCount((prev) => prev - 1);
    }

  const increment = () => {
   setCount((prev) => prev + 1);
   console.log(count);
  }

  const showEven = count % 2 === 0;

  return (
    <div className='p-5'>

      <Typography variant='h3'>{count}</Typography>


      <Button
        onClick={decrement}
        disabled={count === 1}
        size='sm' color='red'>Minus</Button>

      <Button
        onClick={increment}
        size='sm' color='light-green'>Plus</Button>

      <div className='mt-5'>
        {showEven ? <Typography variant='h4'>Even</Typography> : <Typography variant='h4'>Odd</Typography>}
      </div>


    </div>
  )
}

export default Home