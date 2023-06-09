import './FunctionBar.css';
import SizeSelect from '../SizeSelect/SizeSelect';

export default function FunctionBar({
	generateNewArray,
	array,
	bubbleSort,
	selectionSort,
	insertionSort,
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
					<p onClick={generateNewArray}>Shuffle Array</p>
				</div>
				<SizeSelect setArraySize={setArraySize} />
				<div className='Algos'>
					<ul className='Algos'>
						<div className='nlogn'>
							<li
								className={
									activeAlgo[0] === 'quick'
										? activeAlgo[1] === 0
											? 'Active'
											: 'Finished'
										: activeAlgo === ''
										? 'Sort'
										: 'Unactive'
								}
								onClick={() => quickSort(array)}
							>
								Quick Sort
							</li>
							<li
								className={
									activeAlgo[0] === 'merge'
										? activeAlgo[1] === 0
											? 'Active'
											: 'Finished'
										: activeAlgo === ''
										? 'Sort'
										: 'Unactive'
								}
								onClick={() => mergeSort(array)}
							>
								Merge Sort
							</li>
							<li
								className={
									activeAlgo[0] === 'heap'
										? activeAlgo[1] === 0
											? 'Active'
											: 'Finished'
										: activeAlgo === ''
										? 'Sort'
										: 'Unactive'
								}
								onClick={() => heapSort(array)}
							>
								Heap Sort
							</li>
						</div>
						<div className='n2'>
							<li
								className={
									activeAlgo[0] === 'bubble'
										? activeAlgo[1] === 0
											? 'Active'
											: 'Finished'
										: activeAlgo === ''
										? 'Sort'
										: 'Unactive'
								}
								onClick={() => bubbleSort(array)}
							>
								Bubble Sort
							</li>
							<li
								className={
									activeAlgo[0] === 'selection'
										? activeAlgo[1] === 0
											? 'Active'
											: 'Finished'
										: activeAlgo === ''
										? 'Sort'
										: 'Unactive'
								}
								onClick={() => selectionSort(array)}
							>
								Selection Sort
							</li>
							<li
								className={
									activeAlgo[0] === 'insertion'
										? activeAlgo[1] === 0
											? 'Active'
											: 'Finished'
										: activeAlgo === ''
										? 'Sort'
										: 'Unactive'
								}
								onClick={() => insertionSort(array)}
							>
								Insertion Sort
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
