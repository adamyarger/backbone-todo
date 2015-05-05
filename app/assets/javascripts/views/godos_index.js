window.Godo.Views.GodoIndex = Backbone.CompositeView.extend({
	
	template: JST['godos/index'],

	events: {
		'click button#refresh': 'refresh'
	},

	initialize: function(options){

		this.listenTo(this.collection, 'sync', this.render);

		var godoNewView = new Godo.Views.GodoNew({
			godo: this.model
		});
		this.addSubview('#godo-new', godoNewView);
	},

	refresh: function(){
		this.collection.fetch();
	},

	render: function(){
		var renderedContent = this.template({
			godos: this.collection
		});

		this.$el.html(renderedContent);

		this.renderSubviews();

		return this;
	}
});