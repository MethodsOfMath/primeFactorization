function primeFactor(n) {
	arr = [];
	i = 0;
	p = primes[i];
	while (n > 1) {
		if (n % p === 0) {
			n = n/p;
			arr.push(p);
		}	else {
			i++;
			p = primes[i];
		}		
	}
	return arr;
}

function primeFactorsButton(n) {
	document.getElementById("output").innerHTML = primeFactors(n);
}
