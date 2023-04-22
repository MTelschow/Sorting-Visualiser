export default function heapSort(array, animations) {
	buildMaxHeap(array, animations);
	for (let endIdx = array.length - 1; endIdx >= 0; endIdx--) {
		swap(0, endIdx, array, animations);
		shiftDown(0, endIdx - 1, array, animations);
	}
	return array;
}

function buildMaxHeap(array, animations) {
	const firstParentIdx = Math.floor((array.length - 2) / 2);
	for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
		shiftDown(currentIdx, array.length - 1, array, animations);
	}
}

function shiftDown(currentIdx, endIdx, heap, animations) {
	let childOneIdx = currentIdx * 2 + 1;
	while (childOneIdx <= endIdx) {
		const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
		let idxToSwap;

		if (
			childTwoIdx !== -1 &&
			noteComparison(childTwoIdx, childOneIdx, animations) &&
			heap[childTwoIdx] > heap[childOneIdx]
		) {
			idxToSwap = childTwoIdx;
		} else {
			idxToSwap = childOneIdx;
		}
		if (
			noteComparison(idxToSwap, currentIdx, animations) &&
			heap[idxToSwap] > heap[currentIdx]
		) {
			swap(currentIdx, idxToSwap, heap, animations);
			currentIdx = idxToSwap;
			childOneIdx = currentIdx * 2 + 1;
		} else {
			return;
		}
	}
}

function swap(firstIdx, secondIdx, array, animations) {
	animations.push(['s', [firstIdx, secondIdx]]);
	const temp = array[firstIdx];
	array[firstIdx] = array[secondIdx];
	array[secondIdx] = temp;
}

function noteComparison(firstIdx, secondIdx, animations) {
	animations.push([firstIdx, secondIdx]);
	return true;
}
