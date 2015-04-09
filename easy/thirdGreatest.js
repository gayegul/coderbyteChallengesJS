'use strict';

//For this challenge you will determine 
//the third largest string within an array.

function sortByLength(a, b) {
	if(a.length === b.length) {
		return 0;
	}
	else if(a.length < b.length) {
		return 1;
	} 
	else {
		return -1;
	}
}

function ThirdGreatest(strArr) { 
    strArr.sort(sortByLength);
    return strArr[2];    
}