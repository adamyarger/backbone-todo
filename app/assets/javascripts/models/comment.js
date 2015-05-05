window.Godo.Models.Comment = Backbone.Model.extend({
	urlRoot: '/api/comments',

	toJSON: function(){
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.id;
		delete json.created_at;
		delete json.updated_at;

		return json;
	}
});