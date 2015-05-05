window.Godo.Views.GodoNew = Backbone.View.extend({
	template: JST['godos/new'],

	events: {
		'submit form': 'submit'
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event){
		event.preventDefault();

		
		var params = $(event.currentTarget).serializeJSON()['godo'];
		var newGodo = new Godo.Models.Godo(params);

		// newGodo.set('title', $('#godo_title').val());
		newGodo.save({}, {
			success: function(){
				Godo.Collections.godos.add(newGodo);
				Backbone.history.navigate("", {trigger: true});
			}
		});
	}
});