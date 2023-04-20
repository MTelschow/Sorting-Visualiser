import './FunctionBar.css';

export default function FunctionBar({ generateNewArray, array, bubbleSort, selectionSort }) {
	const toggleAlgos = () => {};

	return (
		<div className='FunctionBar'>
			<div className='GenerateNewArray'>
				<p onClick={generateNewArray}>Generate New Array</p>
			</div>
			<div className='Algos'>
				<ul className='Algos'>
					<li className='Bubble Sort' onClick={() => bubbleSort(array)}>Bubble Sort</li>
					<li className='Selection Sort' onClick={() => selectionSort(array)}>Selection Sort</li>
					<li className='Quick Sort'>Quick Sort</li>
					<li className='Merge Sort'>Merge Sort</li>
					<li className='Heap Sort'>Heap Sort</li>
				</ul>
			</div>
			<div className='Start' onClick={toggleAlgos}>
				Sort
			</div>
		</div>
	);
}
