const Checkout = require('../Checkout');
var expect = require('chai').expect;

beforeEach(function() {
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
});

it('Can calculate the current total', function() {
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Can add multiple items and get current total', function () {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('Can add discount rule', function () {
    checkout.addDiscount('a', 3, 2);
})

xit('Can apply discount rules to the total', function() {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
});
