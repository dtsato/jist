var Jist = {}
var format = "console"
for (var i in arguments) {
	if (arguments[i] == '-html') format = "html"
}

Jist.ConsoleFormatter = function(testResults) {
	this.print = function() {
		for (var testName in testResults.results) {
			print(testName + ': ' + format(testResults.results[testName]))
		}
	}
	
	function format(state) {
		return state ? 'OK' : 'FAIL'
	}
}

Jist.HTMLFormatter = function(testResults) {
	this.print = function() {
		for (var testName in testResults.results) {
			result = testResults.results[testName]
			print("<div style='background-color: " + (result ? "#65C400" : "#C40D0D") + "; color: #FFFFFF'>")
			print(testName + ': ' + format(result))
			print("</div>")
		}
	}
	
	function format(state) {
		return state ? 'OK' : 'FAIL'
	}
}

Jist.TestResults = function() {
	this.results = {}
	
	this.pass = function(test) {
		this.results[test] = true
	}
	
	this.fail = function(test) {
		this.results[test] = false
	}
	
	this.printResults = function() {
		// TODO: Is there a way to get rid of this if??
		formatter = format == 'html' ? new Jist.HTMLFormatter(this) : new Jist.ConsoleFormatter(this)
		formatter.print()
	}
}

Jist.TestCase = function() {
	this.tests = {}
	
	this.run = function() {
		result = new Jist.TestResults()
		for (var testName in this.tests) {
			try {
				this.tests[testName].call(this)
				result.pass(testName)
			} catch(e) {
				result.fail(testName, e)
			}
		}
		result.printResults()
	}
	
	this.assert = function(bool) {
		if (!bool) {
			throw new Error('Assertion failed');
		}
	}
}

function describe(name, testCases) {
	var _tests = new Jist.TestCase()
	
	this.test = function(name, body) {
		_tests.tests[name] = body;
	}
	
	testCases.call(this)
	_tests.run()
}