import { useWallet } from "../hooks/useWallet";
import { DonationLink } from "../components/DonationLink/DonationLink";

export const MainPage = () => {
	const { isAuth } = useWallet();

	return (
		<>
			{
        isAuth
          ? <DonationLink />
          : <h2>You need to authorize first</h2>
      }
		</>
	);
};
