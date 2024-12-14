import React, {useState} from 'react';
import { Otp } from './Otp';

const App = () => {

  return (
    <div className='bg-blue-800 h-screen flex flex-col justify-center items-center' >
      <Otp/>
      <Button/>
    </div>
  );
};


function Button(){
  return (
    <>
      <button className="rounded-md bg-blue-500 p-2 pe-10 ps-10 mt-9 text-xl">
        SignUp
      </button>

    </>
  );
}
export default App
