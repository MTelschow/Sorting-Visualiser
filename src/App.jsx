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
  const [currentTimeouts, setcurrentTimeouts] = useState([]);
	const [array, setArray] = useState([]);
	const [arraySize, setArraySize] = useState(50);
	const [speed, setSpeed] = useState(1);

	const [selected, setSelected] = useState([]);

	const randomizeArray = () => {
    clearAnimations();
    const tempArray = [];
    for (let i = 0; i < arraySize; i++) {
      tempArray.push(1);
    }
		const randomArray = tempArray
			.map(() => Math.ceil(Math.random() * 299) + 1);
		setArray(randomArray);
	};

	const changeSpeed = () => {
    if (arraySize >= 100) setSpeed(1);
    else if (arraySize <= 10) setSpeed(200);
    else setSpeed(10);
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
    const timeouts = [];
		if (sort === 'bubble' || sort === 'selection') {
			for (let i = 0; i < animations.length; i++) {
				if (i % 3 === 0) {
					timeouts.push(setTimeout(() => setSelected(animations[i]), i * speed));
				} else if (i % 3 === 2 && animations[i][0] !== animations[i - 1][0]) {
					timeouts.push(setTimeout(() => {
						swap(array, animations[i][0], animations[i][1]);
						setSelected(animations[i]);
					}, i * speed));
				}
			}
		}
		timeouts.push(setTimeout(() => {setSelected([]); setcurrentTimeouts([])}, animations.length * speed));

    setcurrentTimeouts(timeouts);
	};

  const clearAnimations = () => {
    for (let timeout of currentTimeouts) {
      clearTimeout(timeout);
    }
    setSelected([]);
    setcurrentTimeouts([]);
  }

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
				quickSort={quickSort}
				mergeSort={mergeSort}
				heapSort={heapSort}
				array={array}
				setArraySize={setArraySize}
			/>
			<Bars array={array} selected={selected} />
		</div>
	);
}

export default App;
