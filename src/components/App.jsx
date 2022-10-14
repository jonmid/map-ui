import React from 'react';
import ReactTooltip from 'react-tooltip';

const App = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='relative w-[800px] h-[985px] bg-yellow-300 container-image'>
        <span
          class='absolute flex justify-center items-center h-3 w-3 top-[500px] left-96'
          data-tip
          data-for='tooltip1'
        >
          <span class='animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80'></span>
          <span class='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
        </span>

        <span
          class='absolute flex justify-center items-center h-3 w-3 top-[450px] left-[400px]'
          data-tip
          data-for='tooltip1'
        >
          <span class='animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80'></span>
          <span class='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
        </span>

        <span
          class='absolute flex justify-center items-center h-3 w-3 top-[480px] left-[450px]'
          data-tip
          data-for='tooltip1'
        >
          <span class='animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80'></span>
          <span class='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
        </span>

        <ReactTooltip id='tooltip1' place='top' effect='solid'>
          Poner aqui info
        </ReactTooltip>
      </div>
    </div>
  );
};

export default App;
