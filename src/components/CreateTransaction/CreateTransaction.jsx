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
			<input type="text" style={{ border: '1px solid white', background: 'transparent', outline: 0 }} />
			<div className='sumInput'>
        <NumberInput value={inputSum} onChange={changeSumHandler} />
        <h2>USDT</h2>
      </div>
		</>
	);
};