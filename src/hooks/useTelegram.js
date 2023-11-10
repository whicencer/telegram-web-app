import WebApp from '@twa-dev/sdk';

export const useTelegram = () => {
	const user = WebApp.initDataUnsafe.user;

	const onClose = () => {
		WebApp.close();
	};

	return {
		WebApp,
		onClose,
		user,
	};
};