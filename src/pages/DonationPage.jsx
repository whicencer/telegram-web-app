import { useParams } from "react-router-dom";
import { Balance } from "../components/Balance/Balance";
import { CreateTransaction } from "../components/CreateTransaction/CreateTransaction";

export const DonationPage = () => {
	const { address } = useParams();

	return (
		<div>
			<Balance />
			<CreateTransaction address={address} />
		</div>
	);
};