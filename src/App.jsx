import { useState } from 'react';
import JSConfetti from 'js-confetti';
const jsConfetti = new JSConfetti();
import MyForm from './components/CustomForm';
import OneThing from './components/OneThing';

function getSuccessMessage() {
  const message = [
    '恭喜！',
    '啊哈',
    '小事一桩而已',
    '继续！',
    '简直天下无敌了',
  ];
  return message[Math.floor(Math.random() * message.length)];
}

function App() {
  const [isCompleted, setIsCompleted] = useState(true);
  const [thing, setThing] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
    console.log(e);
  };
  const handleInput = (e) => {
    setThing(e.target.value);
  };
  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54',
        '#ff477e',
        '#ff7096',
        '#ff85a1',
        '#fbb1bd',
        '#f9bec7',
      ],
      confettiRadius: 6,
      confettiNumber: 500,
    });
    e.target.removeAttribute('disabled', true);
    setThing('');
    setIsCompleted(true);
  };
  return (
    <main
      className='grid place-items-center 
    min-h-screen bg-gradient-to-b from-slate-100 to-slate-200
    dark:from-slate-800 dark:to-slate-900 text-slate-900
    dark:text-slate-200'>
      <div className='grid place-items-center gap-8 m-8'>
        {isCompleted && (
          <MyForm
            thing={thing}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
          />
        )}
        {!isCompleted && (
          <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  );
}

export default App;
