import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { NumberInput } from '../Input/NumberInput/NumberInput';
import './CreateTransaction.css';

export const CreateTransaction = () => {
	const [address, setAddress] = useState('');
	const [transactionSum, setTransactionSum] = useState('');

	const placeholder = 'EQCSES0TZYqcVkgoguhIb8iMEo4cva...';
	const pasteFromClipboard = async () => {
		const text = await navigator.clipboard.readText();
		setAddress(text);
	}

	return (
		<div className='createTransaction'>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Input maxLength={48} value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder={placeholder} style={{ marginLeft: 15 }} />
				<Button onClick={pasteFromClipboard}>Paste</Button>
			</div>
			<div className='sumInput'>
        <NumberInput setNumber={setTransactionSum} />
        <h2>USDT</h2>
      </div>
		</div>
	);
};