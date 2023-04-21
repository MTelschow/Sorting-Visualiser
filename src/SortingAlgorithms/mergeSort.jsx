export default function mergeSort(array, animations) {
	const auxiliaryArray = array.slice();

	mergeSortHelper(array, auxiliaryArray, 0, array.length - 1, animations);

	return array;
}

function mergeSortHelper(
	mainArray,
	auxiliaryArray,
	startIdx,
	endIdx,
	animations
) {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);

	mergeSortHelper(auxiliaryArray, mainArray, startIdx, middleIdx, animations);
	mergeSortHelper(auxiliaryArray, mainArray, middleIdx + 1, endIdx, animations);

	doMerge(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx, animations);
}

function doMerge(
	mainArray,
	auxiliaryArray,
	startIdx,
	middleIdx,
	endIdx,
	animations
) {
	let currentPos = startIdx;
	let leftPointer = startIdx;
	let rightPointer = middleIdx + 1;

	while (leftPointer <= middleIdx && rightPointer <= endIdx) {
		if (
			auxiliaryArray[leftPointer] < auxiliaryArray[rightPointer] &&
			noteComparison(leftPointer, rightPointer, animations)
		) {
			animations.push(['r', [currentPos, auxiliaryArray[leftPointer]]]);
			mainArray[currentPos++] = auxiliaryArray[leftPointer++];
		} else {
			animations.push(['r', [currentPos, auxiliaryArray[rightPointer]]]);
			mainArray[currentPos++] = auxiliaryArray[rightPointer++];
		}
	}
	while (leftPointer <= middleIdx) {
        animations.push([leftPointer]);
		animations.push(['r', [currentPos, auxiliaryArray[leftPointer]]]);
		mainArray[currentPos++] = auxiliaryArray[leftPointer++];
	}
	while (rightPointer <= endIdx) {
        animations.push([rightPointer]);
		animations.push(['r', [currentPos, auxiliaryArray[rightPointer]]]);
		mainArray[currentPos++] = auxiliaryArray[rightPointer++];
	}
}

function noteComparison(firstIdx, secondIdx, animations) {
	animations.push([firstIdx, secondIdx]);
	return true;
}
