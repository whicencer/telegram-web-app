import '../Input.css';

export const NumberInput = (props) => {
	const invalidChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiop[]/asdfghjkl;'zxcvbnm,.!@#$%^&*()_+|}{:\">?<`~\\".split('');

	return (
		<input {...props} placeholder='0' type="text" pattern="\d*" className="input" maxLength={8} autoFocus onKeyDown={(e) => {
			if (invalidChars.includes(e.key)) e.preventDefault();
		}} />
	);
};