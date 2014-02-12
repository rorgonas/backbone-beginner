// Filename: /views/users/update-view.js
define(
	[
		'backbone',
		'models/update-model',
		'text!templates/users/update-template.html'
	],

	function (Backbone, User, UserUpdateTemplate) {			

			var UserView = Backbone.View.extend({
				el: $('.page'),

				render: function(options) {
					var self = this;
					if (options.id) {
						// Get request
						self.user = new User({id: options.id});
						self.user.fetch({
							success: function(user) {
								var template = _.template(UserUpdateTemplate, {user: user});
								self.$el.html(template);	
							}
						});
					} else {
						var template = _.template(UserUpdateTemplate, {user: null});
						this.$el.html(template);	
					}					
				},

				events: {
					'submit .edit-user-form': 'saveUser',
					'click .delete': 'deleteUser'
				},

				saveUser: function (ev) {
					
					var userDetatils = $(ev.currentTarget).serializeObject();
					var user = new User();
					user.save(userDetatils, {
						success: function(user) {									
							app_router.navigate('', {trigger: true});
						}
					});
					// prevent default page refresh
					return false; 
				},

				deleteUser: function (ev) {
					// DELETE /users/id
					user.destroy({
						success: function() {	
							app_router.navigate('', {trigger: true});
						}
					});
					// prevent default event delegation == no page refresh:)
					return false;
				}
		
			});
	
			// Our module now returns our view
			return UserView;


});