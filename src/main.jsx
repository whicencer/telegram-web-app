import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { DonationPage } from './pages/DonationPage.jsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useWallet } from './hooks/useWallet.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:address",
    element: <DonationPage />
  }
]);

const { isAuth } = useWallet();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/denielsminiapp_bot/"
      }}
      manifestUrl='https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json'
    >
      <App />
      {
        isAuth
          ? <RouterProvider router={router} />
          : <h2>You need to authorize first</h2>
      }
    </TonConnectUIProvider>
  </React.StrictMode>,
);