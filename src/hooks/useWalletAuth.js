import { useTonWallet } from '@tonconnect/ui-react';

export const useWalletAuth = () => {
	const wallet = useTonWallet();

	return { isAuth: !!wallet, wallet };
};