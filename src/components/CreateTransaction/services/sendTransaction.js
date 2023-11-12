export function sendTransaction(receiver, sum, sendTransaction) {
	const transaction = {
		validUntil: Math.floor(Date.now() / 1000) + 600,
		messages: [
			{
				// The receiver's address.
				address: receiver,
				// Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
				amount: sum*1000000000, // Amout in nanoTON
			},
		]
	};

	sendTransaction(transaction);
}