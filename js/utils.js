// Filename: utils.js

define(
	[
		'backbone'
	], 

	function (Backbone) {

		var initialize = function() {

			console.log('Load utils');

			// Hook all AJAX request to a remote server
			$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
				options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
			});

			// Serialize object
			$.fn.serializeObject = function() {
			  var o = {};
			  var a = this.serializeArray();
			  $.each(a, function() {
			      if (o[this.name] !== undefined) {
			          if (!o[this.name].push) {
			              o[this.name] = [o[this.name]];
			          }
			          o[this.name].push(this.value || '');
			      } else {
			          o[this.name] = this.value || '';
			      }
			  });
			  return o;
			};
		}		

		return {
			initialize: initialize
		}

	}
);