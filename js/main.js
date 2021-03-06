// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config(
	{
		appDir: "../",
		baseUrl: "js",
		paths: {
			jquery: 		'libs/jquery/jquery-min',
			underscore: 	'libs/underscore/underscore-min',
			backbone: 		'libs/backbone/backbone-min',
			templates: 		'../templates'
		},

		shim: {
			'backbone': {
				deps: ['jquery','underscore'],
				exports: 'Backbone'
			},
			'underscore': {
				exports: '_'
			},
		}

	}
);

// Load our app module and pass it to our definition function before loading the util module
require(
	[ 
		'app'
	], 

	function (App) {
			
			// The "app" dependency is passed in as "App"			
			App.initialize();
	}
);
