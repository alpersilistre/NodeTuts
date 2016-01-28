var fs = require('fs');

fs.readFile(__filename, {encoding: 'utf8'}, gotFileContent);

function gotFileContent(err, content){
	if(err){
		console.log(err);
	}
	else{
		console.log('This file content is:\n\n' + content);
	}
}