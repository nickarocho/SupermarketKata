const Checkout = require('../Checkout');
var expect = require('chai').expect;

beforeEach(function() {
    checkout = new Checkout();
});

it('Can calculate the current total', function() {
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Can add multiple items and get current total', function () {
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});