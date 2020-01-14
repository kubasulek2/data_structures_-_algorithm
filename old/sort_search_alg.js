const arrReverse = arr => {

	for (let i = 0; i < arr.length / 2; i++) {
		const
			prev = i,
			next = arr.length - 1 - i,
			temp = arr[i];

		arr[prev] = arr[next];
		arr[next] = temp;

	}
	return arr;
};
let array = [1, 2, 3, 4, 5, 6];

let reversedArray = arrReverse(array);
console.log(reversedArray);

const arrToSort = [4, -100, 25, -6, -80, 22, 44, 7, 1000, 44];
console.log('arr ' + arrToSort);

//49 operations
const sortArr = arr => {
	let array = [...arr],
		returnArr = [],
		n = array.length;

	for (let i = 0; i < n; i++) {
		let minValue = array[0],
			minIndex = 0;
		for (let j = 1; j < array.length; j++) {
			console.log('sort n');

			if (array[j] < minValue) {
				minValue = array[j];
				minIndex = j;
			}
		}
		returnArr.push(minValue);
		array.splice(minIndex, 1);
	}
	return returnArr;
};

//49 operations
const bubbleSort = arr => {
	let array = [...arr];
	let temp;
	for (let i = 0; i < array.length - 1; i++) {

		for (let j = 0; j < array.length - 1 - i; j++) {

			if (array[j] > array[j + 1]) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
			console.log('n bubble');

		}
	}
	return array;
};

//19 operations
const insertionSort = arr => {
	let array = [...arr];
	for (let i = 1; i < array.length; i++) {
		const temp = array[i];
		let counter = 0;
		inner:
		for (let j = i - 1; j >= 0; j--) {
			console.log('insertion n');
			if (temp >= array[j]) break inner;
			else {
				array[i - counter] = array[j];
				array[j] = temp;
				counter++;
			}
		}
	}
	return array;

};

let sortedArray = bubbleSort(arrToSort);
console.log(sortedArray);
sortedArray = sortArr(arrToSort);
console.log(sortedArray);
sortedArray = insertionSort(arrToSort);
console.log(sortedArray);

// Create Array from 1 to n
const binaryArr = [...Array(100).keys()].map(val => ++val); // ++val to increment before return, val++ not working


//binary search!!
const biSearch = (arr, val, minIndex, maxIndex) => {
	console.log('n');

	minIndex = minIndex || 0;
	maxIndex = maxIndex || arr.length;

	const mid = minIndex + Math.floor((maxIndex - minIndex) / 2);
	//console.log('n');

	if (val === arr[mid]) {

		return mid;

	} else if (val > arr[mid] && mid < arr.length - 1) {


		return biSearch(arr, val, mid, maxIndex);

	} else if (val < arr[mid] && mid > 0) {
		return biSearch(arr, val, minIndex, mid);

	} else {
		return 'value not in the array';
	}
};

let findIndex = biSearch(binaryArr, 100);
console.log(findIndex);


let arr2 = [4, 1, -18, 24, 3, 4, 1, -3, 2];

const sortArrWholeNoRepeat = arr => {
	let array = [...arr],
		returnArr = [],
		n = array.length;

	for (let i = 0; i < n; i++) {
		let minValue = array[0],
			minIndex = 0;
		for (let j = 1; j < array.length; j++) {
			console.log('sort n');

			if (array[j] < minValue) {
				minValue = array[j];
				minIndex = j;
			}
		}
		repeatCheck:
		if (minValue >= 0) {
			for (let k = 0; k < returnArr.length; k++) {
				if (minValue === returnArr[k]) break repeatCheck;

			}
			returnArr.push(minValue);
		}
		array.splice(minIndex, 1);
	}
	for (let i = 0; i < returnArr.length; i++) {

		if (returnArr[i] !== i) return i;

	}
};

let wholeArr = sortArrWholeNoRepeat(arr2);
console.log(wholeArr);


const matchingPar = (arr, sum) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			console.log('match n');

			if (arr[i] + arr[j] === sum) return [arr[i], arr[j]];

		}
	}
	return false;
};
const arr3 = [5, 2, 3, 4, 1];

console.log(matchingPar(arr3, 9));



const binaryArray = [1, 0, 1, 0, 1, 0, 1, 1, 0, 0];




const binarySorted = binarySort(binaryArray);
console.log(binarySorted);