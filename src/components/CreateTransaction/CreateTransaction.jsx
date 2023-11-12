import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { NumberInput } from '../Input/NumberInput/NumberInput';
import { useTonConnectUI } from '@tonconnect/ui-react';
import './CreateTransaction.css';
import { useTelegram } from '../../hooks/useTelegram';
import { sendTransaction } from './services/sendTransaction';

export const CreateTransaction = () => {
	const [tonConnectUI] = useTonConnectUI();
	const { WebApp } = useTelegram();
	
	const [address, setAddress] = useState('');
	const [transactionSum, setTransactionSum] = useState('0');

	const placeholder = 'EQCSES0TZYqcVkgoguhIb8iMEo4cva...';
	const pasteFromClipboard = async () => {
		const text = await navigator.clipboard.readText();
		setAddress(text);
	};

	const handleSendTransaction = () => {
		sendTransaction(address, transactionSum, tonConnectUI.sendTransaction);
		setTimeout(() => location.reload(), 2000);
	};

	if (transactionSum <= 0) {
		WebApp.MainButton.hide();
	} else {
		WebApp.MainButton.show();
		WebApp.MainButton.setText('Send transaction');
		WebApp.MainButton.onClick(handleSendTransaction);
	}

	return (
		<div className='createTransaction'>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Input style={{ width: '75%', marginLeft: 15 }} maxLength={48} value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder={placeholder} />
				<Button onClick={pasteFromClipboard}>Paste</Button>
			</div>
			<div className='sumInput'>
        <NumberInput setNumber={setTransactionSum} />
        <h2>TON</h2>
      </div>
		</div>
	);
};