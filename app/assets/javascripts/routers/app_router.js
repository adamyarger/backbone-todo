window.Godo.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'godosIndex',
		'godos/new': 'godosNew',
		'godos/:id': 'godosShow'
	},

	godosIndex: function(){
		var indexView = new Godo.Views.GodoIndex({
			collection: Godo.Collections.godos
		});

		Godo.Collections.godos.fetch();
		this._swapView(indexView);
	},

	godosNew: function(){
		var newView = new Godo.Views.GodoNew();
		this._swapView(newView);
	},

	godosShow: function(id){
		var godo = Godo.Collections.godos.getOrFetch(id);
		

		var showView = new Godo.Views.GodoShow({
			model: godo
		});

		this._swapView(showView);
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;

		$('.container').html(view.render().$el);
	}
});