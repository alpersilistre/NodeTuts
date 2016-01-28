module.exports = function composedCall (args, cb){
	call1(args, handlingError(function (result1){
		call2(args, handlingError(function (result2){
			call3(args, handlingError(function (result3){
				cb(null, [result1, result2, result3]);
			}));
		}));
	}));

	function handlingError (fn) {
		return function (err, result) {
			if(err){
				cb(err);
			}
			else{
				fn(result);
			}
		}
	}

};

/// Calls

function call1(args, cb) {
	setTimeout(cb, randomTimeout(), null, randomValue());
}

function call2(args, cb) {
	setTimeout(cb, randomTimeout(), null, randomValue());
}

function call3(args, cb) {
	setTimeout(cb, randomTimeout(), null, randomValue());
}

/// Utils

function randomTimeout() {
	return Math.floor(Math.random() * 1e3);
}

function randomValue() {
	return Math.floor(Math.random() * 1e10);
}