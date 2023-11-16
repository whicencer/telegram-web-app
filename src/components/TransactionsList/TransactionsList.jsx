import { useEffect, useState } from 'react';
import { useWallet } from '../../hooks/useWallet';
import './TransactionsList.css';

export const TransactionsList = () => {
	const { address } = useWallet();
	const [transactions, setTransactions] = useState();

	useEffect(() => {
		const TOKEN = "8b2a3251104676f85ff0825ffd17e2525f46cc5e9d6fb52155d9b0ac44d22e38";
		const reqUrl = `https://toncenter.com/api/v2/getTransactions?address=${address}&limit=100&api_key=${TOKEN}`;
	
		const fetchTransactions = async () => {
			const res = await fetch(reqUrl);
			const data = await res.json();

			setTransactions(data.result?.filter(transaction => transaction.out_msgs.length <= 0));
		};

		fetchTransactions();
	}, []);

	console.log(transactions);

	return (
		<div style={{ margin: 10 }}>
			{
				transactions?.map(transaction => {
					return (
						<div key={transaction.transaction_id?.hash} className='transaction'>
							<div>
								<h3>Anonym</h3>
								<p>{transaction.in_msg?.message || 'No message'}</p>
							</div>
							<h5>{transaction.in_msg?.value}</h5>
						</div>
					);
				})
			}
		</div>
	);
};