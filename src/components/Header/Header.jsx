import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';
import './Header.css';

export const Header = () => {
	const { user, onClose } = useTelegram();

	return (
		<header className='header'>
			<h2>Hello, {user?.first_name || 'Name'}!</h2>
			<Button onClick={onClose}>Exit</Button>
		</header>
	);
};