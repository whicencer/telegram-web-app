import { useState } from 'react';
import '../Input.css';

export const NumberInput = ({setNumber}) => {
  
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
		const value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setValue(value);

		setNumber(Number(value.replace(/\s/g, '').replace(/\,/g, '.')));
  };

	return (
		<input value={value} placeholder='0' type="text" inputmode="decimal" className="input sum" maxLength={8} autoFocus onKeyDownonChange={changeHandler} />
	);
};