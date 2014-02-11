// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/users/list',
  'views/users/edit'
], function($, _, Backbone, UserListView, EditUserView){
  var AppRouter = Backbone.Router.extend({
    routes: {
		'': 'home',
		'new': 		'editUser',
		'edit/:id': 'editUser'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('home', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var userListView = new UserListView();
      userListView.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('editUser', function(){
      var editUserView = new EditUserView();
      editUserView.render();
    });
    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
