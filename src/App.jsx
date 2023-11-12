import { Header } from './components/Header/Header';
import { CreateTransaction } from './components/CreateTransaction/CreateTransaction';
import { useWallet } from './hooks/useWallet';
import './App.css';

function App() {
  const { isAuth, balance } = useWallet();

  return (
    <>
      <Header />
      <h3 style={{ marginLeft: 15 }}>Your balance: {balance} TON</h3>
      {
        isAuth
          ? <CreateTransaction />
          : null
      }
    </>
  );
};

export default App;
