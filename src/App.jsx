import { Header } from './components/Header/Header';
import './App.css'
import { useState } from 'react';

function App() {
  const invalidChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiop[]/asdfghjkl;'zxcvbnm,.!@#$%^&*()_+|}{:\">?<`~\\".split('');
  
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value.replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  return (
    <>
      <Header />
      <input value={value} placeholder='0' type="text" className="input" maxLength={8} autoFocus onKeyDown={(e) => {
        if (invalidChars.includes(e.key)) e.preventDefault();
      }} onChange={changeHandler} />
    </>
  );
};

export default App;
