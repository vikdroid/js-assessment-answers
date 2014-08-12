if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str1) {
            return str +', '+ str1;
        }
    },

    makeClosures : function(arr, fn) {
        var res = [];
        var fun = function(val) {
            return function() {return fn(val);}
        };

        var l = arr.length;

        for(var i = 0; i<l; i++) 
        {
            res.push(fun(arr[i]));
        }
        return res;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn.apply(null, [str1, str2, str3]);
        };
    },

    useArguments : function() {
        var sum = 0;
        var l = arguments.length;
        for(var i=0; i<l; i++)
        {
            sum = sum + arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
         var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var more_args = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, more_args);
      };
    },

    curryIt : function(fn) {
        function applyargs(fn, arguments) {
            return fn.apply(null, arguments);
        }
		
		function getargs(accumulatedArgs, expectedArgsCount){
			return function(currentarg){
				accumulatedArgs.push(currentarg);
				var allArgumentsProvided = accumulatedArgs.length === expectedArgsCount;
				if (allArgumentsProvided) {
					return applyargs(fn, accumulatedArgs);
				} else {
					return getargs(accumulatedArgs, expectedArgsCount);
				}
			};
		}
        return getargs([], fn.length);
    }
  };
});
