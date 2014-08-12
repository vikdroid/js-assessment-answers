if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var listOfFiles = [], dirs = [];
		processDir(data);
		function processDir(dir){
			var files = dir.files;
			dirs.push(dir.dir);
			var l = files.length;
			var file;
			for(var i=0; i<l; i++){
				file = files[i];
				if(typeof file === 'string'){
					if(!dirName || dirs.indexOf(dirName) > -1){
						listOfFiles.push(files[i]);
					}
				}
				else {
						processDir(files[i]);
				}
			}
			dirs.pop();
		}
		return listOfFiles;
    },

    permute: function(arr) {
    	//http://stackoverflow.com/questions/9960908/permutations-in-javascript
    	var permArr=[], usedChars = [];
    	return calculate(arr);
    	function calculate(arr){
	    	var i, n;
		    for (i = 0; i < arr.length; i++) {
		        n = arr.splice(i, 1)[0];
		        usedChars.push(n);
		        if (arr.length == 0) {
		            permArr.push(usedChars.slice());
		        }
		        calculate(arr);
		        arr.splice(i, 0, n);
		        usedChars.pop();
		    }
		    return permArr
		}
		function result(){
			permArr.push(usedChars.slice());
		}
    }
  };
});
