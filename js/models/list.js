// Filename: models/list

define(
	[
		'backbone'
	], 

	function (Backbone) {

			var User = Backbone.Model.extend({
				urlRoot: '/users'
			});

			// Return the model for the module
			return User;

	}
);