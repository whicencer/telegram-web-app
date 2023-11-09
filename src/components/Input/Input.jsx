import { useState } from 'react';
import './Input.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Input = () => {
	const { tg } = useTelegram();
  
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value.replace(/^0/g).replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

	if (value) {
		tg.MainButton.show();
	} else {
		tg.MainButton.hide();
	}

	return (
		<input value={value} placeholder='0' type="number" pattern="\d*" className="input" maxLength={8} autoFocus onKeyDown={(e) => {
			if (e.key === 'e') e.preventDefault();
		}} onChange={changeHandler} />
	);
};