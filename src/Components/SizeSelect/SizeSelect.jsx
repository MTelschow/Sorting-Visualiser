import './SizeSelect.css';

export default function SizeSelect({ setArraySize }) {
	const handleChange = (event) => {
		setArraySize(event.target.value);
	};

	return (
		<div className='custom-select'>
			<label id='size' htmlFor='select'>
				Array Size:{' '}
			</label>
			<select className='minimal' onChange={handleChange} defaultValue={50}>
				<option value='200'>Big</option>
				<option value='50'>Medium</option>
				<option value='6'>Small</option>
			</select>
		</div>
	);
}
