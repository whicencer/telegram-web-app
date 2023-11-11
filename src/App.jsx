import { Header } from './components/Header/Header';
import { useWalletAuth } from './hooks/useWalletAuth';
import './App.css';
import { CreateTransaction } from './components/CreateTransaction/CreateTransaction';

function App() {
  // const [tonConnectUI, setOptions] = useTonConnectUI();
  // const [currentAddress, setCurrentAddress] = useState();
  const { isAuth } = useWalletAuth();

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
