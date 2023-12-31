import { useEffect, useState } from 'react';
import './TransactionsList.css';
import { fromNano } from '@ton/core';
import { useTonAddress } from '@tonconnect/ui-react';
import { useTelegram } from '../../hooks/useTelegram';

export const TransactionsList = () => {
	const address = useTonAddress();
	const [transactions, setTransactions] = useState();
	const { WebApp } = useTelegram();

	useEffect(() => {
		const TOKEN = "8b2a3251104676f85ff0825ffd17e2525f46cc5e9d6fb52155d9b0ac44d22e38";
		const reqUrl = `https://toncenter.com/api/v2/getTransactions?address=${address}&limit=100&api_key=${TOKEN}`;
	
		const fetchTransactions = async () => {
			const res = await fetch(reqUrl);
			const data = await res.json();

			setTransactions(data.result?.filter(transaction => transaction.out_msgs.length <= 0));
		};

		fetchTransactions();
	}, [address]);

	const showDonate = (message) => {
		WebApp.showPopup({
			title: 'Donation Message',
			message,
		});
	};

	return (
		<div style={{ margin: 10 }}>
			{
				transactions?.map(transaction => {
					const message = transaction.in_msg?.message;
					return (
						<div key={transaction.transaction_id?.hash} className='transaction' onClick={() => showDonate(message)}>
							<div>
								<h3>Anonym</h3>
								<p>{message || 'No message'}</p>
							</div>
							<h5>{fromNano(transaction.in_msg?.value)} TON</h5>
						</div>
					);
				})
			}
		</div>
	);
};