window.Godo.Views.CommentsShow = Backbone.View.extend({
	template: function() { 
		return this.open ? JST['comments/edit'] : JST['comments/show']
	},

	events: {
		'click button.destroy': 'destroy',
		'dblclick div.content': 'beginEditing',
		'submit form.comment': 'endEditing'
	},

	initialize: function(options){
		this.open = false,

		this.listenTo(this.model, 'change', this.render);
	},

	render: function(){
		var renderedContent = this.template()({
			comment: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	destroy: function(){
		this.model.destroy();
	},

	beginEditing: function(){
		this.open = true;
		this.render();
	},

	endEditing: function(){
		this.open = false;
		var content = this.$('textarea.comment_content').val();
		this.model.save({content: content});
		this.render();
	}


});