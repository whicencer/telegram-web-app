import { useTelegram } from '../../hooks/useTelegram';
// import { Button } from '../Button/Button';
import { TonConnectButton } from '@tonconnect/ui-react';
import './Header.css';

export const Header = () => {
	const { user, onClose } = useTelegram();

	return (
		<header className='header'>
			<div>
				<h2>Hello, {user?.first_name || 'Name'}!</h2>
				<p className='header_description'>It’s just an application to make donates with TON 🛸</p>
			</div>
			<TonConnectButton style={{ marginLeft: 20, float: 'right' }} />
			{/* <Button onClick={onClose}>Exit</Button> */}
		</header>
	);
};