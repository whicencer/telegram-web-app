import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { Button } from './components/Button/Button';
import './App.css';
import { useState } from 'react';

function App() {
  // const [tonConnectUI, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();
  // const [currentAddress, setCurrentAddress] = useState();

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
      <h2></h2>
      <div className='sumInput'>
        <Input />
        <h2>USDT</h2>
      </div>
      {
        wallet
          ? (
            <>
              <input type="text" onChange={e => setCurrentAddress(e.target.value)} />
              <Button onClick={() => tonConnectUI.sendTransaction(transaction)}>Send transaction</Button>
            </>
          )
          : null
      }
    </>
  );
};

export default App;
