import { useState } from "react";
import { Button } from "../Button/Button";
import './DonationLink.css';
import { useWallet } from "../../hooks/useWallet";

export const DonationLink = () => {
	const { address } = useWallet();
	const [isCopied, setIsCopied] = useState(false);
	const addressLink = address.split(':');

	const link = `https://t.me/denielsminiapp_bot?start=${addressLink[1]}&add=${addressLink[0]}`;

	const copyButtonClick = () => {
		navigator.clipboard.writeText(link)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => setIsCopied(false), 2500);
			});
	};

	return (
		<div className="donationLink">
			<h3>Your donate link</h3>
			<div className="donationLink__link">
				<div className="donationLink__linkbox">
					<p>{link}</p>
				</div>
				<Button onClick={copyButtonClick} style={{ backgroundColor: isCopied && '#25BE45' }}>{ isCopied ? "Copied! 🎉" : "Copy"}</Button>
			</div>
		</div>
	);
};