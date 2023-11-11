import { Header } from './components/Header/Header';
import { useWalletAuth } from './hooks/useWalletAuth';
import './App.css';
import { CreateTransaction } from './components/CreateTransaction/CreateTransaction';

function App() {
  // const [tonConnectUI, setOptions] = useTonConnectUI();
  // const [currentAddress, setCurrentAddress] = useState();
  const { isAuth } = useWalletAuth();

  // const transaction = {
  //   validUntil: Math.floor(Date.now() / 1000) + 600,
  //   messages: [
  //     {
  //       // The receiver's address.
  //       address: currentAddress,
  //       // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
  //       amount: '2000000',
  //     },
  //   ]
  // }

  return (
    <>
      <Header />
      {
        isAuth
          ? <CreateTransaction />
          : null
      }
    </>
  );
};

export default App;
