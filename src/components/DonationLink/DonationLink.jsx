import { useState } from "react";
import { Button } from "../Button/Button";
import './DonationLink.css';
import { useTelegram } from "../../hooks/useTelegram";

export const DonationLink = () => {
	const [link, setLink] = useState('https://t.me/bot_name/4ealrk62djks');
	const [isCopied, setIsCopied] = useState(false);
	const { WebApp } = useTelegram();

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
					<span>{link}</span>
				</div>
				<Button onClick={copyButtonClick} style={{ backgroundColor: isCopied && '#25BE45' }}>{ isCopied ? "Copied!" : "Copy"}</Button>
			</div>
		</div>
	);
};