import { useState } from 'react';
import { Input } from '../Input/Input';
import { NumberInput } from '../Input/NumberInput/NumberInput';
import './CreateTransaction.css';

export const CreateTransaction = () => {
	const [address, setAddress] = useState('');
	const [transactionSum, setTransactionSum] = useState('');
	const [inputSum, setInputSum] = useState('');

	const placeholder = 'EQCSES0TZYqcVkgoguhIb8iMEo4cva...';

	return (
		<div className='createTransaction'>
			<Input maxLength={48} type="text" placeholder={placeholder} style={{ marginLeft: 15 }} />
			<div className='sumInput'>
        <NumberInput setNumber={setTransactionSum} />
        <h2>USDT</h2>
      </div>
		</div>
	);
};