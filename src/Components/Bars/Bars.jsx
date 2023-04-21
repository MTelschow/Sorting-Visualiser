import './Bars.css';

export default function Bars({ array, selected, green }) {
	const dynamicHeights = array.map((value) => {
		return `${value / 3}%`;
	});

	return (
		<div className='Bars'>
			<ul className='BarList'>
				{array.map((value, i) => (
					<li
						className={
							selected.includes(i)
								? 'Selected Bar'
								: green.includes(i)
								? 'Green Bar'
								: 'Bar'
						}
						key={i}
						style={{ height: dynamicHeights[i] }}
					></li>
				))}
			</ul>
		</div>
	);
}
