import { useState, useEffect } from 'react';
import './App.css';
import FunctionBar from './Components/FunctionBar/FunctionBar';
import Bars from './Components/Bars/Bars';
import algos from './SortingAlgorithms/sortingAlgorithms';

const {
	getBubbleSortAnimations,
	getSelectionSortAnimations,
	getQuickSortAnimations,
	getMergeSortAnimations,
	getHeapSortAnimations,
	swap,
} = algos;

function App() {
	const [array, setArray] = useState([]);
	const [arraySize, setArraySize] = useState(50);
	const [speed, setSpeed] = useState(10);

	const [selected, setSelected] = useState([]);

	const randomizeArray = () => {
		const randomArray = new Array(arraySize)
			.fill(0)
			.map(() => Math.ceil(Math.random() * 299) + 1);
		setArray(randomArray);
	};
	const selectionSort = (array) => {
		const animations = getSelectionSortAnimations(array);
		playAnimations(animations, 'selection');
	};

	const bubbleSort = (array) => {
		const animations = getBubbleSortAnimations(array);
		playAnimations(animations, 'bubble');
	};

	const playAnimations = (animations, sort) => {
		if (sort === 'bubble' || sort === 'selection') {
			for (let i = 0; i < animations.length; i++) {
				if (i % 3 === 0) {
					setTimeout(() => setSelected(animations[i]), i * speed);
				} else if (i % 3 === 2 && animations[i][0] !== animations[i - 1][0]) {
					setTimeout(() => {
						swap(array, animations[i][0], animations[i][1]);
						setSelected(animations[i]);
					}, i * speed);
				}
			}
		}

		setTimeout(() => setSelected([]), animations.length * speed);
	};

	useEffect(randomizeArray, []);

	return (
		<div className='App'>
			<FunctionBar
				generateNewArray={randomizeArray}
				bubbleSort={bubbleSort}
				selectionSort={selectionSort}
				array={array}
			/>
			<Bars array={array} selected={selected} />
		</div>
	);
}

export default App;
