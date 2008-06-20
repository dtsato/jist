// load('lib/test_case.js')
Object.prototype.inherits = function(parent) {
	var that = new parent(arguments);
	this.prototype = that;
	return this;
}

var jsunit = {}

jsunit.TestCase = function() {
	this.run = function() {
		this[this.name]();
	}
}

function WasRun(name) {
	this.name = name;
	this.wasRun = false;
	
	this.testMethod = function() {
		this.wasRun = true;
	}
}

WasRun.inherits(jsunit.TestCase);

test = new WasRun('testMethod')
print(test.wasRun)
test.run()
print(test.wasRun)