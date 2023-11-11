import './Input.css';

export const Input = (props) => {
	return (
		<input {...props} placeholder='Address' type="text" className="input" autoFocus />
	);
};