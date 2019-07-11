module.exports = class Checkout {
    constructor() {
        this.prices = new Object();
        this.items = new Object();
        this.discounts = new Object();
    }
    addItemPrice(item, price) {
        this.prices[item] = price;
    }
    addItem(item) {
        if (this.items[item] == undefined) {
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }
    calculateTotal() {
        return this.total;
    }
    addDiscount(item, itemCnt, discountPrice) {
        this.discounts[item] = { cnt: itemCnt, price: discountPrice };
    }
}
