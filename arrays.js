if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
       return arr.indexOf(item);
    },

    sum : function(arr) {
        var s = 0;
        for(var i=0; i<arr.length; i++){
            s += arr[i];
        }
        return s;
    },

    remove : function(arr, item) {
        for(var i = 0; i <arr.length; i++){
            var v = arr[i];
            for(var j = 1; j <arguments.length; j++){
                if(v == arguments[j]){
                    arr.splice(i,1);
                    i--;
                }
            }
        } 
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = 0; i <arr.length; i++){
            var v = arr[i];
            for(var j = 1; j <arguments.length; j++){
                if(v == arguments[j]){
                    arr.splice(i,1);
                    i--;
                }
            }
        } 
        return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0; i < arr.length; ++i){
            if(arr[i] == item)
            count++;
        }
        return count;
    },

    duplicates : function(arr) {
        arr.sort();
        var duplicate = [];
        for (var i = 0; i < arr.length; ++i) {
            if (arr.indexOf(arr[i], i + 1) != -1 && duplicate.indexOf(arr[i]) == -1) {
                duplicate.push(arr[i]);
            }
        }
        return duplicate;
    },

    square : function(arr) {
        var result = [];
        for(var i=0; i<arr.length; i++)
        {
            result.push(arr[i]*arr[i]);
        }
        return result;
    },

    findAllOccurrences : function(arr, target) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(target, i+1)) != -1){
            indexes.push(i);
        }
       return indexes;
    }
  };
});
