if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
			//alert("hi");
			var cnt = start;
			console.log(cnt);
			function counter(){
				setTimeout(function(){
						cnt++; 
						//alert("hi1");
						console.log(cnt);
						if(cnt < end)
						{
							counter();			
						}
			 }, 100);
		 }
	}
  };
});
