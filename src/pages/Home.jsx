import { Button } from '@material-tailwind/react';
import React, { useRef } from 'react'

const Home = () => {


  const per = useRef();
  const vid = useRef();

  const handleRef = () => {
    per.current.focus();
    per.current.style.backgroundColor = "red";
    vid.current.play();
  }



  return (
    <div className='p-5'>

      <video
        ref={vid}
        className='h-[200px]' controls src="https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4"></video>




      <input
        ref={per}
        type="text" className='b border-2' placeholder='username' />

      <br />
      <br />



      <Button onClick={handleRef}>Focus It</Button>

    </div>
  )
}

export default Home