import './Input.css';

export const Input = (props) => {
	return (
		<input {...props} type="text" className="input" autoFocus />
	);
};