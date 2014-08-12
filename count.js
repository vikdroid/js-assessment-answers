if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
			var timeUp;
			function fun () {
				console.log(start++);
				if (start <= end) {
					timeUp = setTimeout(fun, 100);
				}
			}
			fun();
			return {
				cancel : function () {
					timeUp && clearTimeout(timeUp);
				}
			};
		}
  };
});
