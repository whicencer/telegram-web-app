import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

export const Header = () => {
	const { user } = useTelegram();

	return (
		<header className='header'>
			<img src={user?.photo_url} alt="user_avatar" />
			<h2>Hello, {user?.first_name || 'Name'}!</h2>
		</header>
	);
};