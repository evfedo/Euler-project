function euler001(target){
	var n = 3;
    var sum = 0;
    while (n < target){
        sum += (n%3 == 0 || n%5 == 0) ? n : 0;
        n++;
    }
    return sum;
}

var target = 1000; //10; 
var sum  = euler001(target);

console.log("The sum for "+target+" is: " + sum);