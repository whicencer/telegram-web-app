import { useWallet } from "../../hooks/useWallet";
import './Balance.css';

export const Balance = () => {
	const { balance } = useWallet();

	return (
		<div className='balance'>
			<h3>Your balance</h3>
			<h2>{balance} <span>TON</span></h2>
		</div>
	);
};