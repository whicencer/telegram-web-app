import { useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { beginCell, toNano } from '@ton/ton';
import { NumberInput } from '../Input/NumberInput/NumberInput';
import { useTelegram } from '../../hooks/useTelegram';
import { Input } from '../Input/Input';
import './CreateTransaction.css';

export const CreateTransaction = ({ address }) => {
	const [tonConnectUI] = useTonConnectUI();
	const { WebApp } = useTelegram();
	
	const [transactionSum, setTransactionSum] = useState('0');
	const [transactionMessage, setTransactionMessage] = useState('');
	const body = beginCell()
  .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
  .storeStringTail(transactionMessage) // write our text comment
  .endCell();

	const handleSendDonate = () => {
		const transaction = {
			validUntil: Math.floor(Date.now() / 1000) + 600,
			messages: [
				{
					address: `${address}`,
					// Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
					amount: toNano(transactionSum), // Amout in nanoTON
					payload: body.toBoc().toString('base64'),
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
			<Input value={transactionMessage} onChange={(e) => setTransactionMessage(e.target.value)} placeholder='Message...' />
		</div>
	);
};