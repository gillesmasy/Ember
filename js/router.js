
Todos.Router.map(function(){
	this.resource('todos', { path : '/' }, function(){
		//adding Child Routes
		this.route('active');
		this.route('completed');
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('todoModel');
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model : function(){
		return this.modelFor('todos');
	}
});

Todos.TodosActiveRoute = Ember.Route.extend({
	model : function(){
		return this.store.filter('todo', function(todoItem){
			return !todoItem.get('isCompleted');
		});
	},
	renderTemplate : function(controller){
		this.render('todos/index', {controller: controller});
	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
	model : function(){
		return this.store.filter('todo', function(todoItem){
			return todoItem.get('isCompleted');
		});
	},
	renderTemplate : function(controller){
		this.render('todos/index', {controller: controller});
	}
});