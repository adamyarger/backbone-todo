window.Godo.Models.Godo = Backbone.Model.extend ({
	urlRoot: '/api/godos',

	comments: function(){
		if(!this._comments){
			this._comments = new Godo.Collections.GodoComments([], {
				godo: this
			
			});
		}
		return this._comments;
	},

	parse: function(jsonResp){
		if (jsonResp.comments){
			this.comments().set(jsonResp.comments);
			delete jsonResp.comments;
		}
		

		return jsonResp;
	}
});