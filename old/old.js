let array = [1, 2, 3, 4, 5, 6, 7];

const recursProduct = function (arr) {

	if (arr.length == 0)
		return 1;
	return arr.shift() * recursProduct(arr);

};

const sum = recursProduct(array);
console.log(sum);

array = [1, 2, 3, 4, 5, 6, 7];
function arrLength(arr) {


	if (arr.length == 0)
		return 0;
	arr.shift();
	return 1 + arrLength(arr);

}

console.log(arrLength(array));

{
	let i = 0;
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	function arrayMax(i, max) {
		max = max || array[i];
		if (max < array[i]) max = array[i];

		if (i == array.length - 1) return max;
		return arrayMax(i + 1, max);
	}
	console.log(arrayMax(i));
}

/* ====================== GRAPH BREADTH-FIRST SEARCH  ALGORITHM =================*/


// graph illustrates relations my friends, then friends of my friends and so on...
const graph = {
	me: ['Alice', 'Bob', 'Claire'],
	Alice: ['Peggy'],
	Bob: ['Anuj', 'Peggy'],
	Claire: ['Jonny', 'Tom'],
	Peggy: [],
	Anuj: ['Clarke'],
	Jonny: [],
	Thom: []
};

// check if name  end with 'm'
function check(name) {
	return name.charAt(name.length - 1) == 'm';
}


// algorithm function, find friend closest to you whose name ends with 'm'
function breadth_first(graph) {
	let queue = [], checked = [];
	queue = queue.concat(Object.values(graph)[0]); // add my friends to the queue

	while (queue.length > 0) {  // do it until queue isn't empty
		let person = queue.shift(); //take first person out of the queue

		if (checked.indexOf(person == -1)) // if person is not already checked
		{
			if (check(person)) {  // if check function return true
				console.log(person); // print person
				return true;  // return true
			}
			else  //else
			{
				queue = queue.concat(graph[person]); // add friends of the person to the end of queue
				checked.push(person);  // append person in checked array
			}
		}
	}
	return false;    // if this place is reached, it means no such person in your network;
}

breadth_first(graph);


/* ====================== GRAPH DJIKSTRA ALGORITHM =================*/

dGraph = {
	start: {
		lp: 5,
		poster: 0
	},
	lp: {
		guitar: 15,
		drums: 20
	},
	poster: {
		guitar: 30,
		drums: 35
	},
	guitar: {
		piano: 20,
		drums: 10
	},
	piano: 'end'

};
const
	parents = {},
	costs = {};


function djikstra(graph) {
	let shortest = Number.POSITIVE_INFINITY;
	console.log(graph);
	if (typeof graph === 'object') {


		for (const key in graph) {
			if (graph.hasOwnProperty(key) && graph[key] < shortest) {
				shortest = graph[key];

			}
		}
	}

	console.log(shortest);


}

djikstra(dGraph['start']);
