

// hexToRGB
// console.log(hexToRGB(process.argv[2]));


/*
// RGB To Hex
var r = process.argv[2];
var b = process.argv[3];
var g = process.argv[4];

r = rgbToHex(r)
b = rgbToHex(b)
g = rgbToHex(g)

var output = r+b+g;

console.log(output)
*/

function hexToRGB(hex){
	var hex = hex.toString()

	var key = {
		"A":10,
		"B":11,
		"C":12,
		"D":13,
		"E":14,
		"F":15,
	}

	var lastdigit = null;
	var array = hex.split("");

	if(array[array.length - 1] == 0){
		var count = 0;
		while(array.length){
			count++;
			array = array.slice(0,array.length-1);
			if(array.length == 1){
				lastdigit = array[0]
				break;
			}
		}

		return Math.pow(16,count) * lastdigit

	} else {
		var count = 0;
		var ans = 0;

		while(true){

			var digit = array[array.length - 1]

			if(isNaN(digit)){
				digit = key[array[array.length - 1]];
			} 

			if(array.length == 1){
				ans += Math.pow(16,count) * digit;
				break;
			}

			ans += Math.pow(16,count) * digit;
			array = array.slice(0,array.length - 1);
			count++

		}

		return ans
	}


}

function rgbToHex(number){
	
	var key = {
		10:"A",
		11:"B",
		12:"C",
		13:"D",
		14:"E",
		15:"F"
	}


	let quotient = number;
	let answerArray = [];
	var modulo;

	while(quotient > 16){
		
		modulo = quotient%16

		if(modulo == 0){
			
			quotient = quotient/16;
			
			answerArray.unshift(0);

		} else {

			quotient = (quotient - modulo)/16
			
			if(modulo < 10){
				answerArray.unshift(modulo)	
			} else {
				answerArray.unshift(key[modulo])	
			}
			
		}

	}//end of while loop

	if(quotient<10){
		answerArray.unshift(quotient)	
	} else {
		answerArray.unshift(key[quotient])	
	}

	answerArray = answerArray.join("");
	return answerArray
}

