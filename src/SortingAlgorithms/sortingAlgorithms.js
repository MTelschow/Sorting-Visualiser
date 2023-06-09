import heapSort from './heapSort';
import mergeSort from './mergeSort';

function getBubbleSortAnimations(array) {
	const animations = [];
	const arrayCopy = array.slice();

	let swapHappend = true;
	let correct = 0;
	while (swapHappend) {
		swapHappend = false;
		for (let i = 0; i < arrayCopy.length - correct - 1; i++) {
			animations.push([i, i + 1]);
			if (arrayCopy[i] > arrayCopy[i + 1]) {
				animations.push(['s', [i + 1, i]]);
				swapHappend = true;
				swap(arrayCopy, i);
			}
		}
		correct++;
	}
	return animations;
}

function getSelectionSortAnimations(array) {
	const animations = [];
	const arrayCopy = array.slice();

	for (let i = 0; i < arrayCopy.length - 1; i++) {
		let indexLowest = i;
		for (let j = i + 1; j < arrayCopy.length; j++) {
			animations.push([j, indexLowest]);
			if (arrayCopy[j] < arrayCopy[indexLowest]) {
				indexLowest = j;
			}
		}
		animations.push([indexLowest, i]);
		if (i !== indexLowest) animations.push(['s', [indexLowest, i]]);
		swap(arrayCopy, i, indexLowest);
	}

	return animations;
}

function getInsertionSortAnimations(originArray) {
	const animations = [];
	const array = originArray.slice();

	for (let i = 0; i < array.length; i++) {
		let currentIdx = i;

		while (currentIdx > 0) {
			if (
				noteComparison(currentIdx, currentIdx - 1, animations) &&
				array[currentIdx] < array[currentIdx - 1]
			) {
				swapWithAnimations(array, currentIdx, currentIdx - 1, animations);
				currentIdx--;
			} else break;
		}
	}

	return animations;
}

function getQuickSortAnimations(array) {
	const animations = [];
	const arrayCopy = array.slice();

	getQuickSortAnimationsHelper(arrayCopy, 0, arrayCopy.length - 1, animations);

	return animations;
}

function getQuickSortAnimationsHelper(array, startIdx, endIdx, animations) {
	if (startIdx >= endIdx) return;

	const pivot = array[startIdx];
	let leftPointer = startIdx + 1;
	let rightPointer = endIdx;

	while (leftPointer <= rightPointer) {
		animations.push([startIdx, rightPointer]);
		if (!(pivot <= array[rightPointer])) {
			animations.push([startIdx, leftPointer]);
		}

		if (pivot <= array[rightPointer]) rightPointer--;
		else if (pivot >= array[leftPointer]) leftPointer++;
		else {
			swapWithAnimations(array, leftPointer, rightPointer, animations);
			leftPointer++;
			rightPointer--;
		}
	}

	swapWithAnimations(array, startIdx, rightPointer, animations);
	getQuickSortAnimationsHelper(array, startIdx, rightPointer - 1, animations);
	getQuickSortAnimationsHelper(array, rightPointer + 1, endIdx, animations);
}

function getMergeSortAnimations(array) {
	const animations = [];
	const arrayCopy = array.slice();

	mergeSort(arrayCopy, animations);

	return animations;
}

function getHeapSortAnimations(array) {
	const animations = [];
	const arrayCopy = array.slice();

	heapSort(arrayCopy, animations);

	return animations;
}

function noteComparison(firstIdx, secondIdx, animations) {
	animations.push([firstIdx, secondIdx]);
	return true;
}

function swapWithAnimations(array, FirstIndex, SecondIndex, animations) {
	animations.push(['s', [FirstIndex, SecondIndex]]);
	swap(array, FirstIndex, SecondIndex);
}

function swap(array, FirstIndex, SecondIndex = FirstIndex + 1) {
	const temp = array[FirstIndex];
	array[FirstIndex] = array[SecondIndex];
	array[SecondIndex] = temp;
}

export default {
	getBubbleSortAnimations,
	getSelectionSortAnimations,
	getInsertionSortAnimations,
	getQuickSortAnimations,
	getMergeSortAnimations,
	getHeapSortAnimations,
	swap,
};
