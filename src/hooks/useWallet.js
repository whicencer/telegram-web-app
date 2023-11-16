import { getHttpEndpoint } from '@orbs-network/ton-access';
import { TonClient, fromNano } from '@ton/ton';
import { useTonWallet } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

export const useWallet = () => {
	const tonWallet = useTonWallet();
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		async function getBalance() {
			const endpoint = await getHttpEndpoint({ network: "testnet" });
			const client = new TonClient({ endpoint });

			if (tonWallet) {
				const balance = await client.getBalance(tonWallet.account.address);
				const numberedBalance = Number(fromNano(balance)).toFixed(2);
				setBalance(numberedBalance);
			}
		}
		
		getBalance();
	}, [tonWallet]);

	return { isAuth: !!tonWallet, balance, tonWallet };
};