//These functions are meant to simulate some aspects of C for familiarities sake

function printf(str){

	var replacements = Array.prototype.slice.call(arguments, 1);
	var placeholder;

	replacements.forEach(function(replacement){
			switch (typeof replacement){
				case 'string':
					placeholder = '%s';
					break;
				case 'number':
					placeholder = (replacement % 1 === 0) ? '%d' : '%f' ;
					break;
				default:
					placeholder = '%d';
			}
			str = str.replace(placeholder, replacement);
	});
	
	var node = document.createElement('li');
	var textnode = document.createTextNode(str);
	node.appendChild(textnode);
	document.getElementById('cmd').appendChild(node);
}

function scanf(var_name){
	var last_printed_line = document.querySelector('#cmd li:last-of-type').innerHTML;

	var user_input = prompt(last_printed_line);
	user_input = (user_input == null) ? '' : user_input;
	printf(user_input);

	var_name = var_name.replace(/ /g, '');
	var_name = (var_name[0] === '&') ? var_name.substr(1) : var_name;

	this[var_name] = user_input;
}