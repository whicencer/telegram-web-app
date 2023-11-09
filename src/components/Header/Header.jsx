import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';
import './Header.css';

export const Header = () => {
	const { user, onClose } = useTelegram();

	return (
		<header className='header'>
			<div>
				<h2>Hello, {user?.first_name || 'Name'}!</h2>
				<p className='header_description'>It's just a test mini application in Telegram 🛸</p>
			</div>
			<Button onClick={onClose}>Exit</Button>
		</header>
	);
};