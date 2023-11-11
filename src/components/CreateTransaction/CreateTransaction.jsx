import { useState } from 'react';
import { Input } from '../Input/Input';
import { NumberInput } from '../Input/NumberInput/NumberInput';

export const CreateTransaction = () => {
	const [address, setAddress] = useState('');
	const [transactionSum, setTransactionSum] = useState('');
	const [inputSum, setInputSum] = useState('');

	const changeSumHandler = (e) => {
		setInputSum(e.target.value.replace(/^0/g).replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		setTransactionSum(inputSum.replace(/,/g, ''));
	}

	console.log(transactionSum);

	return (
		<>
			<Input style={{ marginLeft: 15 }} type="text" value={address} onChange={e => setAddress(e.target.value)} />
			<div className='sumInput'>
        <NumberInput value={inputSum} onChange={changeSumHandler} />
        <h2>USDT</h2>
      </div>
		</>
	);
};