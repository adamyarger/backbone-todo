window.Godo.Views.GodoShow = Backbone.CompositeView.extend({
	template: JST['godos/show'],

	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.comments(), "add", this.addComment);
		this.listenTo(this.model.comments(), "remove", this.removeComment);

		// var view = this;
		// this.model.comments().each(function(comment){
		// 	view.addComment(comment);
		// }) id th same as >>

		this.model.comments().each(this.addComment.bind(this));


		var commentNewView = new Godo.Views.CommentsNew({
			godo: this.model
		});
		this.addSubview('.comment-new', commentNewView);

	},

	addComment: function(comment){
		var commentShowView = new Godo.Views.CommentsShow({
				model: comment
			});
			
			this.addSubview('.comments', commentShowView);
			commentShowView.render();
		
	},

	removeComment: function(comment){
		var commentShowView =
			_(this.subviews()['.comments']).find(function(subview){
				return subview.model == comment;
			});

		this.removeSubview('.comments', commentShowView);
	},

	render: function(){
		var renderedContent = this.template({
			godo: this.model
			// comments: this.comments
		});

		this.$el.html(renderedContent);

		this.renderSubviews();

		return this;
	}
});