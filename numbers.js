if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num >> bit - 1) & 1;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var n = Number(num).toString(2);
        while (n.length < 8) n = "0" + n;
        return n;
    },

    multiply: function(a, b) {
         return +(a * b).toPrecision(10);
    }
  };
});

