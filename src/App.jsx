import { Header } from './components/Header/Header';
// import { CreateTransaction } from './components/CreateTransaction/CreateTransaction';
import { useWallet } from './hooks/useWallet';
import './App.css';
import { DonationLink } from './components/DonationLink/DonationLink';

function App() {
  const { isAuth, balance } = useWallet();

  return (
    <>
      <Header />
      <div className='balance'>
        <h3>Your balance</h3>
        <h2>{balance} <span>TON</span></h2>
      </div>
      {
        isAuth
          ? <DonationLink />
          : null
      }
    </>
  );
};

export default App;
