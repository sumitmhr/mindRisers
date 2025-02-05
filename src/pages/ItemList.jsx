import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useApi } from '../custom-hooks/apiHooks';

const ItemList = () => {

  const {label} = useParams();
  const [load, data, err] = useApi('filter.php', {c : label})
  const nav = useNavigate();


  if (load) {
    return <h1 className="text-center text-2xl font-bold mt-10">Loading.....</h1>;
  }

  if (err) {
    return <h1 className="text-center text-2xl font-bold text-red-500 mt-10">{err}</h1>;
  }


  // console.log(data);

  return (
    <div className='grid grid-cols-1 gap-4 p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     {data && data.meals.map((meal) => {
      return <div 
      key = {meal.idMeal} 
      onClick = {() => nav(`/item-detail/${meal.idMeal}`)} className='shadow-2xl cursor-pointer'>
        <img className='w-full' src={meal.strMealThumb} alt={meal.strMeal} />
        <Typography 
          variant='h5' 
          color='blue-gray'
          className='mt-2 px-5'>
            {meal.strMeal}
          </Typography>
      </div>
     })}
    </div>
  )
}

export default ItemList