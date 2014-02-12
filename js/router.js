// Filename: router.js

// Not sure if is ok to mess with Global scope for routig
var app_router;

define(
	[
		'backbone',
		'views/users/list-view',
		'views/users/update-view'
	], 

	function (Backbone, UserList, UserUpdate) {
			var AppRouter = Backbone.Router.extend({
				// routes object hash
				routes: {
					'': 			'home',
					'new': 			'update',
					'edit/:id': 	'update'
				}
			});

			var initialize = function () {
				app_router = new AppRouter;

				app_router.on('route:home', function () {
					// Call render on the module we loaded in via the dependency array
					// 'views/users/list-view'
					var userList = new UserList();
					userList.render();
				});  

				app_router.on('route:update', function (id) {
					// 'views/users/update-view'
					var userUpdate = new UserUpdate();
					userUpdate.render({id: id});
				});

				Backbone.history.start();

				if (!Backbone.History.started){
					console.log('history not started');
				}
				console.log('history started');
			};

		return {
			initialize: initialize
		};

	}
);
