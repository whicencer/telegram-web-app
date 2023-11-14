import { useState } from 'react';
import { NumberInput } from '../Input/NumberInput/NumberInput';
import { useTonConnectUI } from '@tonconnect/ui-react';
import './CreateTransaction.css';
import { useTelegram } from '../../hooks/useTelegram';

export const CreateTransaction = ({ address }) => {
	const [tonConnectUI] = useTonConnectUI();
	const { WebApp } = useTelegram();
	
	const [transactionSum, setTransactionSum] = useState('0');

	const handleSendDonate = () => {
		const transaction = {
			validUntil: Math.floor(Date.now() / 1000) + 600,
			messages: [
				{
					address: address,
					// Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
					amount: transactionSum*1000000000, // Amout in nanoTON
				},
			]
		};
		tonConnectUI.sendTransaction(transaction);
	};

	if (transactionSum <= 0) {
		WebApp.MainButton.hide();
	} else {
		WebApp.MainButton.show();
		WebApp.MainButton.setText('Send donate');
		WebApp.MainButton.onClick(handleSendDonate);
	}

	return (
		<div className='createTransaction'>
			<div className='sumInput'>
        <NumberInput setNumber={setTransactionSum} />
        <h2>TON</h2>
      </div>
		</div>
	);
};