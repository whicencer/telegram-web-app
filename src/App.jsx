import { Header } from './components/Header/Header';
import './App.css'

function App() {
  const invalidChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiop[]/asdfghjkl;'zxcvbnm,.!@#$%^&*()_+|}{:\">?<`~\\".split('');
  return (
    <>
      <Header />
      <input type="text" className="input" autoFocus onKeyDown={(e) => {
        if (invalidChars.includes(e.key)) e.preventDefault();
      }} />
    </>
  );
};

export default App;
