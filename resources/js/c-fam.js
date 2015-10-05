function printf(str){
	var node = document.createElement('li');
	var textnode = document.createTextNode(str);
	node.appendChild(textnode);
	document.getElementById('cmd').appendChild(node);
}

function scanf(var_name){
	var last_printed_line = document.querySelector('#cmd li:last-child').innerHTML;
	var user_input = prompt(last_printed_line);
	printf(user_input);

	window[var_name] = user_input;
}