var AEToken = artifacts.require("./AEToken.sol");

contract('AEToken', function(accounts) {
	const amounts = [1337, 7331];
  it("should have initial totalSupply 0", function() {
    return AEToken.deployed().then(function(instance) {
      return instance.totalSupply.call();
    }).then(function(supply) {
      assert.equal(supply.valueOf(), 0, "0 wasn't in the initial totalSupply");
    });
  });
  it("should have inital prefilled value of false", function() {
    var aet;

    return AEToken.deployed().then(function(instance) {
      aet = instance;
      return aet.prefilled.call();
    }).then(function(prefilled) {
      assert.equal(prefilled, false, "false wasn't the initial value of prefilled");
    });
  });
  it("should create tokens with prefill()", function() {
    var aet;
		var creator;

    return AEToken.deployed().then(function(instance) {
      aet = instance;
      return aet.creator.call();
    }).then(function(_creator) {
			creator = _creator;
      return aet.prefill.sendTransaction([accounts[0], accounts[1]], [amounts[0], amounts[1]], {from: creator});
    }).then(function() {
      return aet.totalSupply.call();
		}).then(function(supply) {
			const t = amounts[0] + amounts[1];
      assert.equal(supply.valueOf(), t, t + " wasn't in the totalSupply after prefill");
		}).catch(function(err) {
			assert.isNull(err);
		});
  });
  it("should not allow token transfer before launch()", function() {
    var aet;
		var creator;

    return AEToken.deployed().then(function(instance) {
      aet = instance;
      return aet.transferFrom.call(accounts[0], accounts[1], amounts[0]);
    }).then(function() {
      assert.ok(false)
		}).catch(function(err) {
			assert.isNotNull(err);
		});
  });
	it("should have prefilled value of true after launch()", function() {
		var aet;

		return AEToken.deployed().then(function(instance) {
			aet = instance;
			return aet.creator.call();
		}).then(function(creator) {
			return aet.launch.sendTransaction.call({from: creator});
		}).then(function() {
			return aet.prefilled.call();
		}).then(function(prefilled) {
			assert.equal(prefilled, true, "true wasn't the value of prefilled after calling launch()");
		});
	});
	it("should fail to create more tokens after launch()", function() {
		var aet;
		var creator;

		return AEToken.deployed().then(function(instance) {
			aet = instance;
			return aet.creator.call();
		}).then(function(_creator) {
			creator = _creator;
			return aet.prefill.sendTransaction.call({from: creator}, [[], []]);
		}).then(function() {
			assert.ok(false);
		}).catch(function(err) {
			assert.isNotNull(err);
		});
	});
  it("should allow token transfer after launch()", function() {
    var aet;
		var creator;

    return AEToken.deployed().then(function(instance) {
      aet = instance;
      return aet.transfer(accounts[1], amounts[0], {from: accounts[0]});
    }).then(function() {
      return aet.balanceOf.call(accounts[1]);
		}).then(function(balance) {
			const t = amounts[0] + amounts[1];
      assert.equal(balance.valueOf(), t, t + " wasn't the new balance for account 1 after transferFrom");
		}).then(function() {
      return aet.balanceOf.call(accounts[0]);
		}).then(function(balance) {
			const t = 0;
      assert.equal(balance.valueOf(), t, t + " wasn't the new balance for account 0 after transferFrom");
		});
  });
});
