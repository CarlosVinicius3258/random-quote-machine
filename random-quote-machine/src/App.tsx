import { useState } from 'react';
import twitterLogo from './assets/twitter.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full h-screen flex justify-center items-center  bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
      <div id='quote-box' className='flex flex-col justify-between min-w-[60%] max-w-[60%] h-96 bg-white shadow-lg rounded-lg	p-10'>
        <div>
          <p id='text' className='text-center text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo, doloremque corporis mollitia assumenda nulla harum deserunt quis ullam, delectus quia tenetur. Voluptates minima totam, ad repellat illum blanditiis commodi.</p>
          <div className='w-full text-right mt-5'>
            <p id='author' className='font-bold'>- Ipsum, Lorem</p>
          </div>
        </div>
        <div className='flex justify-between my-7'>
          <div className='flex justify-center items-center bg-blue-700 rounded-md'>
            <a href="" id='tweet-quote'>
              <div className='shadow-xl p-2 '>
                <img width={ 25 } src={ twitterLogo } alt="" />
              </div>
            </a>
          </div>
          <button className='p-2 bg-blue-700 hover:shadow-xl text-white font-bold rounded-md' id='new-quote'> New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
