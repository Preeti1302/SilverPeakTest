var https = require('https'); // Import Node.js core module
var request = require('request');


const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('shell: > ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    rl.prompt();
    console.log("line : " + line);
	var array = line.split(',')
	console.log("ARRAY IS :" + array)
	

	var length = array.length;
	var iterations = array[array.length -1] ;
	
	var jsonData = {array : array , iterations : iterations}; //This has to be posted
	for (var i =0 ; i<length-1 ;){
		var url = array[i];
		//iterations = array[length-1] 
		console.log(array[i])
		for(var j = 1 ; j <= iterations ; j++ ){				
			var start = new Date();
			var count = 0;
			request.get(url, function (error, response, body) {
				console.log('For URL : ' + url)
				console.log('error:', error); // Print the error if one occurred
				console.log('Request took:', new Date() - start, 'ms');

				console.log(count++)
				console.log("\n")
			}); 

		}
		i++;
	}


    
    
}).on('close',function(){
    process.exit(0);
});



var server = https.createServer(function (req, res) {   //create web server

});



server.listen(3000); //6 - listen for any incoming requests

//console.log('Node.js web server at port 5000 is running..')