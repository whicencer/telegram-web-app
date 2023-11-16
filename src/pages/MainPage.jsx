import { useWallet } from "../hooks/useWallet";
import { DonationLink } from "../components/DonationLink/DonationLink";
import { TransactionsList } from "../components/TransactionsList/TransactionsList";

export const MainPage = () => {
	const { isAuth } = useWallet();

	return (
		<>
			{
        isAuth
          ? (
						<>
							<DonationLink />
							<TransactionsList />
						</>
					)
          : <h2>You need to authorize first</h2>
      }
		</>
	);
};
