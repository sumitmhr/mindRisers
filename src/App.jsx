import React from 'react'

import Practice1 from './practice-1';

import ProgramCard from './components/ProgramCard';
import App1 from './App1';

const App = () => {

  const person = 'Hello Shyam';

  const age = 90;

  const movie = {
    name: 'Avatar',
    release: 2024,
  }

  const greet = () => {
    alert('hello jee');
  }

  const greet1 = (personName) => {
    alert(`hello jee ${personName}`);
  }

  const donotCopy = () => {
    alert('Please do not copy');
  }

  return (
    // 1.  <div>
    //   <h1>{`${person.toUpperCase()}`}</h1>
    //   <p>{age}</p>
    // </div>

    // 2. <div className='p-5'>

    // <div className='h-60 w-60 bg-purple-700'>

    // </div>
    // <h1 className='text-5xl font-semibold text-amber-500'>hello jee</h1>

    // </div>

    <div className = 'p-5'>
    <button
        onMouseEnter={() => {
          console.log('hello jee');
        }}
        className='bg-slate-500 text-white px-4 py-2 rounded-md hover:ring-2 ring-purple-500 '>Call Func</button>

        <br /><br />

    <button
        onClick={() => greet1('shyam')}
        className='bg-slate-500 text-white px-4 py-2 rounded-md hover:ring-2 ring-purple-500 '>Call Func</button>

        <br /><br />

      <p onCopy={donotCopy}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quasi distinctio esse laudantium fugiat! Ratione quae officiis dolorem unde numquam commodi perferendis at vel minus, assumenda aliquid sapiente provident mollitia.</p>

      <Practice1 />

      <br /><br />

      <ProgramCard 
      label = {'Node.js'}
      author = {'Emanuele DeilBono'}
      url = {'https://plus.unsplash.com/premium_photo-1682192408471-a7cf432b3fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D'}
      // name = {'hello jee'} 
      // age = {90} 
       />

       <ProgramCard
       label = {'React.js'}
       author = {'Dmriti Nesteruk'}
       url = {'https://plus.unsplash.com/premium_photo-1682192408471-a7cf432b3fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D'}
       />

       <App1 />

    </div>
  )
}

export default App