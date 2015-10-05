//These functions are meant to simulate some aspects of C for familiarities sake

function printf(str, replacement){

	if(replacement != null){
		str = str.replace('%s', replacement.toString());
		str = str.replace('%d', parseInt(replacement));
		str = str.replace('%f', parseFloat(replacement));
	}

	var node = document.createElement('li');
	var textnode = document.createTextNode(str);
	node.appendChild(textnode);
	document.getElementById('cmd').appendChild(node);
}

function scanf(var_name){
	var last_printed_line = document.querySelector('#cmd li:last-child').innerHTML;
	var user_input = prompt(last_printed_line);
	if(user_input == null){
		user_input = '';
	}

	printf(user_input);

	window[var_name] = user_input;
}