import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='sumInput'>
        <Input />
        <h2>USDT</h2>
      </div>
      <TonConnectButton />
    </>
  );
};

export default App;
