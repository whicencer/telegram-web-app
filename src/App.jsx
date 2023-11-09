import { useTelegram } from './hooks/useTelegram';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import './App.css'

function App() {
  const { onClose } = useTelegram();

  return (
    <>
      <Header />
      <Button onClick={onClose}>Close App</Button>
    </>
  );
};

export default App;
