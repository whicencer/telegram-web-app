import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='input'>
        <Input />
        <h2>USDT</h2>
      </div>
    </>
  );
};

export default App;
