model.Employee = new DataClass("Employees" ,"public");
 
model.Employee.ID = new Attribute("storage", "long", "key auto");
model.Employee.firstname = new Attribute("storage", "string", "btree");
model.Employee.lastname = new Attribute("storage", "string", "btree");
model.Employee.manager = new Attribute("relatedEntity", "Employee", "Employee");
model.Employee.employer = new Attribute("relatedEntity", "Company", "Company");
 
model.Company = new DataClass("Companies" ,"public");
model.Company.ID = new Attribute("storage", "long", "key auto");
model.Company.name = new Attribute("storage", "string", "btree");
model.Company.revenues = new Attribute("storage", "number");
