function() {
	assert();
	1.should ==
	
	(1).should("==", 1)

	assertTrue()
	
	expect(2).when(function() {
		return Math.sum(1, 1)
	})
	
	assertTrue([1, 2, 3].include(3))
	assertRaises(obj.blow(), Error)

	obj.should_have error.on(:asdasd)
	
	expect(error_on('asd')).when(function() {
		return new Object('asd')
	})
	
	expect('can not be nil').when(new Object('asd').errors['name'])
	
	expect(error_on('asd')).to('==', 'can not be nil').when(function() {
		asdasdasd
	})
	
	expect([1, 2, 3]).to('include', 3)
	
	expect(undefined).when(asdasdas)
	expect(Error).when(obj.blow())
	
	
	test('calculator#sum', function() {
		given(new Calculator())
		when('sum', 1, 1)
		then('==', 2)
		
		calc = new Calculator()
		when(calc.sum(1, 1))
		then('==', 2)
		
		calc = new Calculator()
		expect(calc.sum(1, 1)).to('==', 2)
		
		calc = new Calculator()
		expect('==', 2).when(calc.sum(1, 1))
		
		calc = new Calculator()
		expect(2).when(calc.sum(1, 1))
		
		expect(result == 2).when(calc.sum(1, 1))
		
		expect(equal(res, 2)).when(calc.sum(1, 1))
		
		equal = function(res, value) {
			return res == value
		})
		
		calc = new Calculator()
		assert(calc.sum(1, 1) == 2)
		
		calc = new Calculator()
		(calc.sum(1, 1)).should('==', 2)
	})


	test('door', function() {
		given(new Door(true))
		when('close')
		then('closed', true)
		
		door = new Door(true)
		when(door.close())
		then('closed', true)
		
		door = new Door(true)
		expect(door.close()).to('closed', true)
		expect(door.close()).to('be closed')
		expect(door.close()).to_be('closed')
		
		door = new Door(true)
		expect('closed', true).when(door.close())
		expect('to be closed').when(door.close())
		
		door = new Door(true)
		expect('closed').when(door.close())
		expect(door.closed()).when(door.close())
		expect(door.closed()).when(function() {
			door.close()
		})
		
		door = new Door(true)
		door.close()
		assert(door.closed())
		
		door = new Door(true)
		expect(door_closed).when(function() {door.close()})
		
		expect(result.size == 3).when(...)
		
		door_closed = function(when_fn) {
			door = when_fn();
			return door.closed()
		}
		
		door = new Door(true)
		(door.close()).should('closed', true)
		(door.close()).should('be closed')
		(door.close()).should_be('closed')
	})
	
	matchers['door closed'] = function(when_fn) {
		result = when_fn();
		result.closed()
	}
	
	given(door = new Door(true), function() {
		// subject/given
		expect(door.closed()).when(door.close())
	})





	test('raise', function() {
		given(new Door(false))
		when('close')
		then(DoorAlreadyClosedError)
		then('door already closed')
		
		door = new Door(false)
		when(door.close())
		then(DoorAlreadyClosedError)
		then('door already closed')
		
		door = new Door(false)
		expect(door.close()).to('be closed')
		expect(door.close()).to(DoorAlreadyClosedError)
		expect(door.close()).to_raise(DoorAlreadyClosedError)
		
		door = new Door(false)
		expect('door already closed').when(door.close())
		
		door = new Door(false)
		expect(DoorAlreadyClosedError).when(door.close())
		expect(DoorAlreadyClosedError).when(function() {
			door.close()
		})

		door = new Door(false)
		assert(Error, function() {
			door.close()
		})
		
		door = new Door(false)
		expect(door_already_closed).when(function() {door.close()})
		
		door_already_closed = function(when_fn) {
			skljadlskjasd...
		}
		
		door = new Door(false)
		(door.close()).should(DoorAlreadyClosedError)
		(door.close()).should('raise error')
		(door.close()).should_raise(DoorAlreadyClosedError)
	})
	
	
	members = session.subscribedMembers()
	assert(members.include('me'))
	
	list = [1, 2, 3, 4]
	assert(list.at(3) == 4)
	
	matchers['door already closed'] = function(result) {
		try {
			result
		} catch(DoorAlreadyClosed e) {
			return true;
		}
		return false;
	}
	
}