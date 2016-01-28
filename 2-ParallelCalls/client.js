var operation = require('./operation')

operation({some: 'args'}, function (err, result) {
	if(err){
		console.log(err);
	}
	else{
		console.log('successful result', result);
	}		
});