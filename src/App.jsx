import { useState, useEffect } from 'react';
import './App.css';
import FunctionBar from './Components/FunctionBar/FunctionBar';
import Bars from './Components/Bars/Bars';
import algos from './SortingAlgorithms/sortingAlgorithms';

const {
	getBubbleSortAnimations,
	getSelectionSortAnimations,
	getInsertionSortAnimations,
	getQuickSortAnimations,
	getMergeSortAnimations,
	getHeapSortAnimations,
	swap,
} = algos;

function App() {
	const [currentTimeouts, setCurrentTimouts] = useState([]);
	const [array, setArray] = useState([]);
	const [arraySize, setArraySize] = useState(50);
	const [speed, setSpeed] = useState(1);
	const [selected, setSelected] = useState([]);
	const [green, setGreen] = useState([]);

	const [activeAlgo, setActiveAlgo] = useState('');

	const randomizeArray = () => {
		const random = false;
		if (random) {
			clearAnimations();
			const tempArray = [];
			for (let i = 0; i < arraySize; i++) {
				tempArray.push(1);
			}
			const randomArray = tempArray.map(
				(item, i) => Math.ceil(Math.random() * 299) + 1
			);
			setArray(randomArray);
		} else {
			clearAnimations();
			const height = 300 / arraySize;
			const tempArray = [];
			for (let i = 0; i < arraySize; i++) {
				tempArray.push(1);
			}
			const randomArray = tempArray.map((item, i) => (i + 1) * height);
			randomArray.sort((a, b) => 0.5 - Math.random());
			setArray(randomArray);
		}
	};

	const changeSpeed = () => {
		if (arraySize >= 100) setSpeed(5);
		else if (arraySize <= 10) setSpeed(500);
		else setSpeed(20);
	};

	const bubbleSort = (array) => {
		if (currentTimeouts.length !== 0) return;
		const animations = getBubbleSortAnimations(array);
		playAnimations(animations, 'bubble');
	};

	const selectionSort = (array) => {
		if (currentTimeouts.length !== 0) return;
		const animations = getSelectionSortAnimations(array);
		playAnimations(animations, 'selection');
	};

	const insertionSort = (array) => {
		if (currentTimeouts.length !== 0) return;
		const animations = getInsertionSortAnimations(array);
		playAnimations(animations, 'insertion')
	}

	const quickSort = (array) => {
		if (currentTimeouts.length !== 0) return;
		const animations = getQuickSortAnimations(array);
		playAnimations(animations, 'quick');
	};

	const mergeSort = (array) => {
		if (currentTimeouts.length !== 0) return;
		const animations = getMergeSortAnimations(array);
		playAnimations(animations, 'merge');
	};

	const heapSort = (array) => {
		if (currentTimeouts.length !== 0) return;
		const animations = getHeapSortAnimations(array);
		playAnimations(animations, 'heap');
	};

	const playAnimations = (animations, sort) => {
		setActiveAlgo([sort, 0]);
		const timeouts = [];

		for (let i = 0; i < animations.length; i++) {
			if (animations[i][0] === 's') {
				timeouts.push(
					setTimeout(() => {
						swap(array, animations[i][1][0], animations[i][1][1]);
						setSelected(animations[i][1]);
					}, i * speed)
				);
			} else if (animations[i][0] === 'r') {
				timeouts.push(
					setTimeout(() => {
						array[animations[i][1][0]] = animations[i][1][1];
					}, i * speed)
				);
			} else {
				timeouts.push(setTimeout(() => setSelected(animations[i]), i * speed));
			}
		}

		timeouts.push(
			setTimeout(() => {
				setSelected([]);
				setActiveAlgo([sort, 1]);
				for (let i = 0; i < arraySize; i++) {
					timeouts.push(
						setTimeout(() => setSelected([]), (2000 / arraySize) * i)
					);
					timeouts.push(
						setTimeout(() => {
							green.push(i);
							setGreen(green);
						}, (2000 / arraySize) * i)
					);
				}

				timeouts.push(
					setTimeout(() => {
						setGreen([]);
						setCurrentTimouts([]);
						setActiveAlgo('');
					}, 2500)
				);
			}, animations.length * speed)
		);
		setCurrentTimouts(timeouts);
	};

	const clearAnimations = () => {
		for (let timeout of currentTimeouts) {
			clearTimeout(timeout);
		}
		setSelected([]);
		setCurrentTimouts([]);
		setActiveAlgo('');
	};

	useEffect(() => {
		randomizeArray();
		changeSpeed();
	}, [arraySize]);

	return (
		<div className='App'>
			<FunctionBar
				generateNewArray={randomizeArray}
				bubbleSort={bubbleSort}
				selectionSort={selectionSort}
				insertionSort={insertionSort}
				quickSort={quickSort}
				mergeSort={mergeSort}
				heapSort={heapSort}
				array={array}
				setArraySize={setArraySize}
				activeAlgo={activeAlgo}
			/>
			<Bars array={array} selected={selected} green={green} />
		</div>
	);
}

export default App;
