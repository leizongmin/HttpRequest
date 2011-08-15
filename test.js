/**
 * 测试HttpRequest
 */
 
var HttpRequest = require('./HttpRequest');
//console.log(HttpRequest);

HttpRequest.get('http://hi624.info/_test/test.php?t=jhjhjh&t2=fdf', {a:123, b:456, c:'大家好'}, function (err, data) {
	console.log(data);
	if (err)
		console.log('ERROR: ' + err);
});

HttpRequest.post('http://hi624.info/_test/test.php?at=111', {a:123, b:456, c:'大家好'}, function (err, data) {
	console.log(data);
	if (err)
		console.log('ERROR: ' + err);
}, {'Additional-header': 'Power by leizongmin'});