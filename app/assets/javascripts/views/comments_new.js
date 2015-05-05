window.Godo.Views.CommentsNew = Backbone.View.extend({
	template: JST["comments/new"],

	initialize: function(options){
		this.godo = options.godo;
	},

	events: {
		"submit form": "submit"
	},

	render: function(){
		var renderedContent = this.template({
			godo: this.godo
		});

		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event){
		var view = this;

		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON()["comment"];
		var comment = new Godo.Models.Comment(params);

		comment.save({}, {
			success: function(){
				view.godo.comments().add(comment)
				//this clears out the text area after submit
				view.$('textarea[name=comment\\[content\\]]').val("");
			}
		});
	}
});