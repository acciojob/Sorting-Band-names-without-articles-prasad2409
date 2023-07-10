//your code here
function Sortingband(arr){
	let sorted_array = arr.sort((x,y)=>{

		if(x.startsWith("The")){
			x = x.slice(4);
		}
		if(x.startsWith("A")){
			x = x.slice(2);
		}
		if(x.startsWith("An")){
			x = x.slice(3);
		}
		if(y.startsWith("The")){
			y = y.slice(4);
		}
		if(y.startsWith("A")){
			y = y.slice(2);
		}
		if(y.startsWith("An")){
			y = y.slice(3);
		}

		
		if(x > y){
			return 1;
		}
		if(x < y){
			return -1;
		}
		return 0;
	});

  return sorted_array;
}
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let output = Sortingband(touristSpots);

output.forEach((value)=>{

	const elemento = document.createElement("LI");
	elemento.innerHTML = value;
	document.getElementById("band").appendChild(elemento);
});
