import React from 'react'

const Practice1 = () => {

  const movie = {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8,
    posterUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runtime: "148 minutes",
    language: "English",
    boxOffice: "$829.9 million"
  };

  return (
    <div >
      <h1>{movie.title}</h1>
      <p>{movie.director}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <p>{movie.rating}</p>
      <p>{movie.description}</p>
      <p>{movie.runtime}</p>
      <p>{movie.language}</p>
      <p>{movie.boxOffice}</p> 
      <img src={movie.posterUrl} alt={movie.title} />

    </div>
  )
}

export default Practice1