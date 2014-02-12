// Filename: collections/list

define(
	[
		'backbone',
		'models/list'
	], 

	function (Backbone, User) {

			var Users = Backbone.Collection.extend({
				url: '/users',
				model: User
			});

			return Users;
	}
);