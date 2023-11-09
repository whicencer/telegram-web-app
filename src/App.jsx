import { Header } from './components/Header/Header';
import './App.css'

function App() {
  const invalidChars = ['e', '+', '-'];
  return (
    <>
      <Header />
      <input type="number" className="input" autoFocus onKeyDown={(e) => {
        if (invalidChars.includes(e.key)) e.preventDefault();
      }} />
    </>
  );
};

export default App;
