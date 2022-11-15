import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main
      className='grid place-items-center 
    min-h-screen bg-gradient-to-b from-slate-100 to-slate-300'>
      <h1>
        你目前最想做的事是？
        <br /> What is your "One Thing" ?
      </h1>
    </main>
  );
}

export default App;
