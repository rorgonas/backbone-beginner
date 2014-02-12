// Filename: views/users/list

define(
	[
		'backbone',
		'collections/list',
		'text!templates/users/list.html'
	], 

	function (Backbone, UsersCollection, UserListTemplate) {
			
			console.log('List view called');
			var UserList = Backbone.View.extend({
				el: $('.page'),
				render: function () {
					var self = this;
					var users = new UsersCollection();
					console.log('Should render view');
					// fetch data from that resource
					users.fetch({
						// callback for success
						success: function(users) {
							var template = _.template( UserListTemplate, {users: users.models});
							self.$el.html(template);
						}
					});
					return self;			
				}
			});

			// Our module now returns our view
  			return UserList;

	}
);