if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var deferred = $.Deferred();
        setTimeout(function(){
            deferred.resolve(value);
        }, 100);
    	return deferred.promise();
    },

    manipulateRemoteData : function(url) {
    	var deferred = $.Deferred();
    	$.ajax({
    		url: url
    	}).done(function(data){
    		var people = $.map(data.people, function(person){
    			console.log(person.name);
    			return person.name;
    		});
    		deferred.resolve(people.sort());
    	});
    	return deferred.promise();
    }
  };
});
