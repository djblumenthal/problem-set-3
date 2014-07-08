var palindrome = function (str){
	

	var firstHalf;
	var secondHalf;
	// determine if string is even or odd letters
	// 	slice string in half (minus middle element if lenght is odd)
	if (str.length%2 == 1){
		firstHalf = str.slice(0, Math.floor(str.length/2));
		secondHalf = str.slice(Math.ceil(str.length/2), str.length);
	}
	else {
		firstHalf = str.slice(0, str.length/2);
		secondHalf = str.slice(str.length/2, str.length);
	}
	secondHalf = secondHalf.split('').reverse().join('');
	return (firstHalf == secondHalf);
}

	// reverse array of second half, join it, and determine if it equals first half of joined string


	var dashInsert = function (num){
		num = num.toString();
		var arr = [];
		var count = 0;
		for (var i=0; i<num.length; i++){
			if (i==num.length-1){
				arr.push(num.slice([i-count], [i+1]));
			}
			else if (num[i]%2 == 1 && num[i+1]%2 ==1){
				arr.push(num.slice([i-count], [i+1]));
				count = 0;
			}
			else count++;
			
		}return arr.join('-');
	}