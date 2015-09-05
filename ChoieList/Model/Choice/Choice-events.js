model.Choice = new DataClass("Choices", "public");

model.Choice.ID = new Attribute("storage", "long", "key auto");
model.Choice.category = new Attribute("storage", "string", "cluster");
model.Choice.value = new Attribute("storage", "string", "btree");
model.Choice.inactive = new Attribute("storage", "bool");

model.Keyword = new DataClass("Keywords", "public", "Choice");

model.Status = new DataClass("Statuses", "public", "Choice");

model.City = new DataClass("Cities", "public", "Choice");
model.City.theState = new Attribute("relatedEntity", "State", "State");

model.State = new DataClass("States", "public", "Choice");
model.State.stateCities = new Attribute("relatedEntities", "Cities", "theState", {reversePath: true});

model.Choice.events.save = function(event) {
	var myType = this.getDataClass().getName();
	this.category = myType;
	console.info("Just saved a choice instance");
}

model.Keyword.events.restrict = function(event){
	return valCollect(event.dataClassName);
}

model.Status.events.restrict = function(event){
	return valCollect(event.dataClassName);
}

model.City.events.restrict = function(event){
	return valCollect(event.dataClassName);
}

model.State.events.restrict = function(event){
	return valCollect(event.dataClassName);
}

var valCollect = function(cname) {
	var col = ds.Choice.query("category == '" + cname + "'");
	return col;
}

