import { useState } from 'react';
import '../Input.css';

export const NumberInput = ({setNumber}) => {
	const invalidChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiop[]/asdfghjkl;'zxcvbnm!@#$%^&*()_+|}{:\">?<`~\\".split('');
  
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
		const value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    setValue(value);

		setNumber(Number(value.replace(/\s/g, '')));
  };

	return (
		<input value={value} placeholder='0' type="number" inputmode="decimal" className="input sum" maxLength={8} autoFocus onKeyDown={(e) => {
			if (invalidChars.includes(e.key)) e.preventDefault();
		}} onChange={changeHandler} />
	);
};