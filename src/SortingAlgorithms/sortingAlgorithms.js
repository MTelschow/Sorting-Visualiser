function getBubbleSortAnimations(array) {
	const animations = [];
	const arrayCopy = copyArray(array);

	let swapHappend = true;
	let correct = 0;
	while (swapHappend) {
		swapHappend = false;
		for (let i = 0; i < arrayCopy.length - correct - 1; i++) {
			animations.push([i, i + 1]);
			if (arrayCopy[i] > arrayCopy[i + 1]) {
				animations.push([i + 1, i]);
				swapHappend = true;
				swap(arrayCopy, i);
			} else {
				animations.push([i, i + 1]);
			}
			animations.push([i, i + 1]);
		}
		correct++;
	}
	return animations;
}

function getSelectionSortAnimations(array) {
	const animations = [];
	const arrayCopy = copyArray(array);

	for (let i = 0; i < arrayCopy.length - 1; i++) {
		let indexLowest = i;
		for (let j = i + 1; j < arrayCopy.length; j++) {
			animations.push([j, indexLowest], [j, indexLowest], [j, indexLowest]);
			if (arrayCopy[j] < arrayCopy[indexLowest]) {
				indexLowest = j;
			}
		}
		if (i !== indexLowest) animations.push([i, indexLowest], [indexLowest, i], [i, indexLowest]);
		swap(arrayCopy, i, indexLowest);
	}

	return animations;
}

function getQuickSortAnimations(array) {
	const animations = [];
	const arrayCopy = copyArray(array);

	return animations;
}

function getMergeSortAnimations(array) {
	const animations = [];
	const arrayCopy = copyArray(array);

	return animations;
}

function getHeapSortAnimations(array) {
	const animations = [];
	const arrayCopy = copyArray(array);

	return animations;
}

function swap(array, FirstIndex, SecondIndex = FirstIndex + 1) {
	let temp = array[FirstIndex];
	array[FirstIndex] = array[SecondIndex];
	array[SecondIndex] = temp;
}

function copyArray(array) {
	const arrayCopy = [];
	for (let element of array) {
		arrayCopy.push(element);
	}
	return arrayCopy;
}

export default {
	getBubbleSortAnimations,
	getSelectionSortAnimations,
	getQuickSortAnimations,
	getMergeSortAnimations,
	getHeapSortAnimations,
	swap,
};
