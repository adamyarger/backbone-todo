window.Godo.Collections.GodoComments = Backbone.Collection.extend({
	
	model: Godo.Models.Comment,

	url: '/api/comments'
	// function(){
	// 	// return this.godo.url() + '/comments';
	// 	url
	// },
	
	//init function is for the :id in the url
	// initialize: function(models, options){
	// 	this.godo = options.godo;
	// }
});



