import { Header } from './components/Header/Header';
import { CreateTransaction } from './components/CreateTransaction/CreateTransaction';
import { useWallet } from './hooks/useWallet';
import './App.css';

function App() {
  const { isAuth, balance } = useWallet();

  return (
    <>
      <Header />
      <div className='balance'>
        <h3>You balance</h3>
        <h2>{balance} <span>TON</span></h2>
      </div>
      {
        isAuth
          ? <CreateTransaction />
          : null
      }
    </>
  );
};

export default App;
