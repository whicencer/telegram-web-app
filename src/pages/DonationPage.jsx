import { useParams } from "react-router-dom";
import { Balance } from "../components/Balance/Balance";
import { CreateTransaction } from "../components/CreateTransaction/CreateTransaction";
import { useWallet } from "../hooks/useWallet";

export const DonationPage = () => {
	const { address } = useParams();
	const { isAuth } = useWallet();

	let realAddress = `${address[address.length-1]}:${address.substring(0, address.length-1)}`;

	return (
		<div>
			{
				isAuth
					? (
						<>
							<Balance />
							<CreateTransaction address={realAddress} />
						</>
					)
					: <h2>You need to authorize first</h2>
			}
		</div>
	);
};