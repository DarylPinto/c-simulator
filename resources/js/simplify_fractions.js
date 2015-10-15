function getGCF(numerator, denominator){
	var GCF;	
	for(var i = 0; i <= numerator || i <= denominator; i++){
		if(numerator % i === 0 && denominator % i === 0){
			GCF = i;
		}
	}
	return GCF;
}

function printSimplified(numerator, denominator){
	var GCF = getGCF(numerator, denominator);
	var simplified_numerator = numerator / GCF;
	var simplified_denominator = denominator / GCF;

	printf('The simplified fraction is: %d/%d', simplified_numerator, simplified_denominator);
}

function main(){

	printf('Please enter numerator:');
	scanf('&numerator');
	printf('Please enter denominator:');
	scanf('&denominator');

	printf('The GCF is: %d', getGCF(numerator, denominator));

	printSimplified(numerator, denominator);

	return 0;
}