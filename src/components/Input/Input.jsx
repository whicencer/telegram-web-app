import { useState } from 'react';
import './Input.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Input = () => {
	const { tg } = useTelegram();

	const invalidChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiop[]/asdfghjkl;'zxcvbnm,.!@#$%^&*()_+|}{:\">?<`~\\".split('');
  
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
		<input value={value} placeholder='0' type="text" pattern="\d*" className="input" maxLength={8} autoFocus onKeyDown={(e) => {
			if (invalidChars.includes(e.key)) e.preventDefault();
		}} onChange={changeHandler} />
	);
};