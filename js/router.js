// Filename: router.js
define([
  'backbone',
  'views/users/list'
], function(Backbone, UserList){
  var AppRouter = Backbone.Router.extend({
    // routes object hash
    routes: {
		'': 			'home',
		'new': 			'editUser',
		'edit/:id': 	'editUser'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
   
    app_router.on('route:home', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/users/list'
      var userList = new UserList();
      userList.render();
    });  
    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
