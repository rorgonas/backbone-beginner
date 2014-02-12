// Filename: app.js

define(
  [
    'backbone',
    'router',
    'utils'
  ], 

  function (Backbone, Router, Utils){
 
      var initialize = function() {
        
        // Pass utility functions
        Utils.initialize();

        // Pass in our Router module and call it's initialize function
        Router.initialize();
      }

      return {
        initialize: initialize
      };
  }

);
