import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import { faker } from '@faker-js/faker';



const Home = () => {

  const [users, setUsers] = useState([]);

  const addUser = () => {
    const newUser = {
      userId: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      }

      console.log(newUser);
    }

  return (
    <div className='p-5'>

      <Typography variant='h3'>User Listings</Typography>


      <Button
        onClick={addUser}
        size='sm' color='green'>Random User</Button>


    </div>
  )
}

export default Home