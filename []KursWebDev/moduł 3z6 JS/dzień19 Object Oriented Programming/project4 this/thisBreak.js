// when bound this is break

// 1.break this and rebuild

const collection = {
    items: ['item1', 'item2'],

    eachOneItem: function () {
        const that = this;
        this.items.forEach(function (item, index) {
            console.log(that.items[index]);
            // "THAT" take a REF from "THIS" (const that = this);
        })
    }
}
collection.eachOneItem();



// 2.break this and rebuild

const collection2 = {
    items: ['itemXXX', 'itemVVV'],

    showItem: function () {
        for (const item of this.items) {
            console.log(item);
        }
    }
}

collection2.showItem();



// 3.arrow function - do not create his own "THIS"

const collection3 = {
    items: ['item =^-^=', 'item =^-^= =^-^='],
    showCatItem: function () {
        console.log(this);
        this.items.forEach((item, index) => {
            console.log(this.items[index]);
        });
    }
}
collection3.showCatItem();



// 4. BIND;

const collection4 = {
    items: ['element11', 'element22'],

    showEachOne: function () {
        this.items.forEach(function (item, index) {
            console.log(this.items[index]);
        }.bind(collection4));
    }
}
collection4.showEachOne();




// 5. forEach with This as (argument)

// A
const collection5 = {
    items: ['this.EachArgumentXXX', 'this.EachArgumentVVV'],

    showEachOne: function () {
        this.items.forEach(function (item, index) {
            console.log(this.items[index]);
        }, this);
    }
}
collection5.showEachOne();

// B
const collection6 = {
    items: ['EachArgument11', 'EachArgument22'],

    showThisArrFunc: function () {
        this.items.forEach((item, index) => { //Arrow function;
            console.log(this.items[index]);
        }, this)
    }
}
collection6.showThisArrFunc();