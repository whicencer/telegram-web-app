import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/denielsminiapp_bot/start"
      }}
      manifestUrl='https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json'
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>,
);