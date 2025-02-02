import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import { faker } from '@faker-js/faker';
import { TableWithStripedRows } from '../components/TableWithStripedRows';



const Home = () => {


    // Collection of comment objects in variable "comments"

    const comments =[
      {
        "id": 1,
        "body": "This is some awesome thinking!",
        "postId": 242,
        "likes": 3,
        "user": {
          "id": 105,
          "username": "emmac",
          "fullName": "Emma Wilson"
        }
      },
      {
        "id": 2,
        "body": "What terrific math skills you're showing!",
        "postId": 46,
        "likes": 4,
        "user": {
          "id": 183,
          "username": "cameronp",
          "fullName": "Cameron Perez"
        }
      },
      {
        "id": 3,
        "body": "You are an amazing writer!",
        "postId": 235,
        "likes": 2,
        "user": {
          "id": 1,
          "username": "emilys",
          "fullName": "Emily Johnson"
        }
      },
    ]

    // Collection of quote objects in variable "quotes"


    const quotes = [
      {
        "id": 1,
        "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
        "author": "Rumi"
      },
      {
        "id": 2,
        "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
        "author": "Abdul Kalam"
      },
      {
        "id": 3,
        "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
        "author": "Abdul Kalam"
      },
      {
        "id": 4,
        "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
        "author": "Bill Gates"
      },
      {
        "id": 5,
        "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
        "author": "Rumi"
      },
      {
        "id": 6,
        "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
        "author": "Abu Bakr (R.A)"
      },
    ];
  
  

  return (
    <div className='p-5 space-y-3'>

      <h1>This is comments section:</h1>

        {comments.map(({ body, id, likes, postId, user: { username, fullName }}, index) => {
        return <div key={id}>
          <p>Body {index + 1} : {body}</p>
          <h1>Username {index + 1} : {username}</h1>

        </div>

      })}

      <br /><br /><br />



      <h1>This is quotes section:</h1>

        {quotes.map(({id, quote, author}, index) => {

          return <div key = {id}>
            <p>Quote {index + 1} : {quote}</p>
            <h1>Author {index + 1} : {author}</h1>
          </div>
          
        })}


    </div>
  )
}

export default Home