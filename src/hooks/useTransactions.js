import { useState, useEffect } from "react";

export const useTransactions = (address) => {
	

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(reqUrl);
				if (!res.ok) {
					throw new Error(`HTTP error! Status: ${res.status}`);
				}
				
				const data = await res.json();
				setData(data.result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
	
		fetchData();
	}, [reqUrl]);

	return data;
};