import { Header } from './components/Header/Header';
// import { CreateTransaction } from './components/CreateTransaction/CreateTransaction';
import { useWallet } from './hooks/useWallet';
import './App.css';
import { DonationLink } from './components/DonationLink/DonationLink';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { isAuth, balance } = useWallet();
  const { WebApp } = useTelegram();
  if (isAuth) {
    WebApp.CloudStorage.setItem('authorized', true);
  }

  return (
    <>
      <Header />
      {
        isAuth
          ? <DonationLink />
          : <h2>You need to authorize first</h2>
      }
      {/* <div className='balance'>
        <h3>Your balance</h3>
        <h2>{balance} <span>TON</span></h2>
      </div> */}
    </>
  );
};

export default App;
