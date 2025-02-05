import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useApi } from '../custom-hooks/apiHooks';
import Loading from '../components/Loading';
import Error from '../components/Error';

const ItemsDetail = () => {
  const { id } = useParams();
  const [load, data, err] = useApi('lookup.php', {i : id})


  if (load) {
    return <Loading />;
  }

  if (err) {
    return <Error />;
  }

  console.log(data);


  return (
    <div className='p-5'>

      {data && data.meals.map((meal) => {

        const steps = meal.strInstructions.split(/STEP \d+/).filter(step => step.trim());

        // console.log(Object.keys(meal));

        const url = meal.strYoutube.split('=')[1];
        // console.log(meal.strYoutube.split('=')[1]);
        return <div 
        key={meal.idMeal}
        className='space-y-5'
        >

          <iframe 
          className='h-[300px] w-[500px]'
          src={`https://www.youtube.com/embed/${url}`} 
          >
            <h1>The Video Source</h1>
          </iframe>

          
          
          <div className='flex gap-16'>

            <div>
              <Typography>Ingredients:</Typography>
              {
               Object.keys(meal).map((mealKey, index) => {
                if (mealKey.startsWith('strIngredient')) {
                // console.log(meal[mealKey]);
                if (meal[mealKey])
                return <h1 key={mealKey}>{mealKey.substring(13)}. {meal[mealKey]}</h1>
                  }
                })
              }
            </div>

            <div>
              <Typography>Measures:</Typography>
              {
                Object.keys(meal).map((mealKey, index) => {
                  if (mealKey.startsWith('strMeasure')) {
                  // console.log(meal[mealKey]);
                    if (meal[mealKey]?.trim())
                    return <h1 key={mealKey}>{mealKey.substring(10)}. {meal[mealKey]}</h1>
                  }
                })
              }

            </div>

          </div>
          



          <div>
            <Typography>Instructions:</Typography>

            {/* <p>{meal.strInstructions}</p> */}
            {/* "<pre></pre>" tag for separation of steps */}

            {steps.map((step, index) => (
              <div
              key={index}
              className='step'
              >
                <h3>Step {index + 1}</h3>
                <p>{step.trim()}</p>
              </div>
            ))}
          </div>

        </div>
      })}


    </div>

  );
};

export default ItemsDetail;