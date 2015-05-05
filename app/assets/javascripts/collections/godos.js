window.Godo.Collections.Godos = Backbone.Collection.extend({
	url: "/api/godos",
	model: Godo.Models.Godo,

	getOrFetch: function(id){
		var model;
		var godos = this;

		if(model = this.get(id)){
			model.fetch();
			return model;
		} else{
			model = new Godo.Models.Godo({id: id});
			model.fetch({
				success: function(){godos.add(model)}
			});
			return model;
		}
	}
});

window.Godo.Collections.godos = new Godo.Collections.Godos();