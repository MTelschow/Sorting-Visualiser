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
	activeAlgo,
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
						<li className={activeAlgo === 'bubble' ? 'Active' : (activeAlgo === '' ? 'Sort' : 'Unactive' )} onClick={() => bubbleSort(array)}>
							Bubble Sort
						</li>
						<li className={activeAlgo === 'selection' ? 'Active' : (activeAlgo === '' ? 'Sort' : 'Unactive' )} onClick={() => selectionSort(array)}>
							Selection Sort
						</li>
						<li className={activeAlgo === 'quick' ? 'Active' : (activeAlgo === '' ? 'Sort' : 'Unactive' )} onClick={() => quickSort(array)}>
							Quick Sort
						</li>
						<li className={activeAlgo === 'merge' ? 'Active' : (activeAlgo === '' ? 'Sort' : 'Unactive' )} onClick={() => mergeSort(array)}>
							Merge Sort
						</li>
						<li className={activeAlgo === 'heap' ? 'Active' : (activeAlgo === '' ? 'Sort' : 'Unactive' )} onClick={() => heapSort(array)}>
							Heap Sort
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
