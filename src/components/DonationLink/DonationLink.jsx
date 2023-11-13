import { Button } from "../Button/Button";
import './DonationLink.css';

export const DonationLink = () => {
	return (
		<div className="donationLink">
			<h3>Your donate link</h3>
			<div className="donationLink__link">
				<div className="donationLink__linkbox">
					<span>https://t.me/bot_name/4ealrk62djks</span>
				</div>
				<Button>Copy</Button>
			</div>
		</div>
	);
};