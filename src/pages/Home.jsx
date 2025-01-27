import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import { faker } from '@faker-js/faker';
import { TableWithStripedRows } from '../components/TableWithStripedRows';



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

      setUsers((prev) => [...prev, newUser]);
    }

      // const numbers = [
      //   { id: 1, name: 'one' },
      //   { id: 2, name: 'two' },
      // ];
      // const g = numbers.filter((num) => num.id !== 1);
      // console.log(g);

    const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

    const persons  = [
      {name: 'ram', age: 90, id: 1},
      {name: 'shyam', age: 95, id: 2},
      {name: 'sita', age: 70, id: 3},
    ];

    const posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
  ];

  const photos = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
  ];

  const recipes = [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
  
    },
    {
      "id": 2,
      "name": "Vegetarian Stir-Fry",
      "ingredients": [
        "Tofu, cubed",
        "Broccoli florets",
        "Carrots, sliced",
        "Bell peppers, sliced",
        "Soy sauce",
        "Ginger, minced",
        "Garlic, minced",
        "Sesame oil",
        "Cooked rice for serving"
      ],
      "instructions": [
        "In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice."
      ],
      "prepTimeMinutes": 15,
      "cookTimeMinutes": 20,
      "servings": 3,
      "difficulty": "Medium",
      "cuisine": "Asian",
      "caloriesPerServing": 250,
      "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
      "rating": 4.7,
    },
  ]
  
  

  return (
    <div className='p-5'>

      <Typography variant='h3'>User Listings</Typography>


      <Button
        onClick={addUser}
        size='lg' color='green'>Random User</Button>


        {users.length === 0 && <Typography variant='h6'>please create come users !</Typography>}



        <TableWithStripedRows users={users} setUsers={setUsers} />


      {numbers.map((n, i) => {
        return (
        <div key={i}>
        <h1>Hello World on index {i} -------- Value: {n}</h1> <br /> 
        </div>
      )}
      )}

      {persons.map((person) => {
        return (
          <div key={person.id}>
        <h1>
          Name: {person.name}---
          Age : {person.age} 
        </h1> <br />
        </div>
      )}  
      )}

      {posts.map((post, i) => {
        return (
        <div key = {post.id}>
          <h1>Title {i+1}: {post.title}</h1> <br />
          <h1>Post: {i+1} {post.body}</h1> <br />
        </div>
      )}
      )}

      {photos.map((photo, i) => {
        return <div key={photo.id}>
          <h1>Photo Title {i+1}: {photo.title}</h1> <br />
          <h1>Photo URL {i+1}: {photo.url}</h1> <br />
        </div>
      })}

      <div>
        <h1 className='text-4xl font-bold text-light-green-900'>Recipe Lists</h1> <br />
        {recipes.map((recipe, i) => {
          return (
              <div key={recipe.id}>
                <img src={recipe.image}  alt={recipe.name} className='w-[300px] h-[300px] rounded-full' />
                <br />
                <h2 className='text-2xl font-bold'>{recipe.name}</h2> <br />
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <p><strong>Calories per serving:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Rating:</strong> {recipe.rating} stars</p>
                <br />

                <h3 className='text-xl'>Ingredients:</h3>
                <br />
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{index+1}. {ingredient}</li>
                  ))}
                </ul>
                <br />

                <h3 className='text-xl'>Instructions:</h3>
                <br />
                <ol>
                  {recipe.instructions.map((instruction, i) => (
                    <li key={i}>{i+1}. {instruction}</li>
                  ))}
                </ol>
                <br />
              </div>
          )
        })}
      </div>

      

      


    </div>
  )
}

export default Home