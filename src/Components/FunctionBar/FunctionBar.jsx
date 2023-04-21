import './FunctionBar.css';
import SizeSelect from '../SizeSelect/SizeSelect';

export default function FunctionBar({
	generateNewArray,
	array,
	bubbleSort,
	selectionSort,
	quickSort,
	mergeSort,
	heapSort,
	setArraySize,
}) {
	const toggleAlgos = () => {};

	return (
		<div className='Header'>
			<h1>Sorting Visualiser</h1>
			<div className='FunctionBar'>
				<div className='GenerateNewArray'>
					<p onClick={generateNewArray}>Generate New Array</p>
				</div>
				<SizeSelect setArraySize={setArraySize} />
				<div className='Algos'>
					<ul className='Algos'>
						<li className='Bubble Sort' onClick={() => bubbleSort(array)}>
							Bubble Sort
						</li>
						<li className='Selection Sort' onClick={() => selectionSort(array)}>
							Selection Sort
						</li>
						<li className='Quick Sort' onClick={() => quickSort(array)}>
							Quick Sort
						</li>
						<li className='Merge Sort' onClick={() => mergeSort(array)}>
							Merge Sort
						</li>
						<li className='Heap Sort' onClick={() => heapSort(array)}>
							Heap Sort
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
