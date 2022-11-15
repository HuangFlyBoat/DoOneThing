import MyButton from './MyButtom';
const OneThing = ({ thing, handleCompletedThing }) => {
  return (
    <>
      <h1
        className='text-3xl sm:text-6xl
       font-bold text-center'>
        {thing}
      </h1>
      <MyButton
        text='完成了！'
        handleCompletedThing={handleCompletedThing}></MyButton>
    </>
  );
};

export default OneThing;
