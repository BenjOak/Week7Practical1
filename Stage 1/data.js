let fortyTwo = {
    numberOrName: "42",
    streetName: "Scarcroft Road",
    city: "York",
    postcode: "YO23 1NF",
    display: function() {
        return this.numberOrName + "/" + this.streetName + "/" 
            + this.city + "/" + this.postcode;
    }
}

console.log(fortyTwo.streetName);
console.log(fortyTwo.display());

let home = {
    name: "Rose Farm Cottage",
    street: "Grindlow",
    town: "Great Hucklow",
    postcode: "SK17 8RJ",
    display: function () {
        return this.name + "/" + this.street +
            "/" + this.town + "/" + this.postcode;
    }
}

console.log(home.display());

let uni = {
    name: "Flat 6 Block B1",
    street: "David Kato College, Lakeside Way",
    town: "York",
    postcode: "YO10 5FY",
    display: function () {
        return this.name + "/" + this.street +
            "/" + this.town + "/" + this.postcode;
    }
}

console.log(uni.street);

function Address(name, street, town, postcode) {
    this.name = name;
    this.street = street;
    this.town = town;
    this.postcode = postcode;
    this.display = function () {
        return this.name + "/" + this.street +
        "/" + this.town + "/" + this.postcode;
    }
}

let ashHouse = new Address("Ash House", "Great Hucklow", "Buxton", "SK17 8RG");
let home2 = new Address("Rose Farm Cottage", "Grindlow", "Grindlow", "SK17 8RJ");
let forty2 = new Address("42", "Scarcroft Road", "York", "YO23 1NF");


console.log(ashHouse.display());
console.log(home2.display());
console.log(forty2.town);

class Houses {
    
    number;
    street;
    town;
    postcode;

    constructor(number, street, town, postcode) {
        this.number = number;
        this.street = street;
        this.town = town;
        this.postcode = postcode;
    }

    display() {
        return this.number + "/" + this.street +
        "/" + this.town + "/" + this.postcode;
    }
}

let fortyTwo2 = new Houses("42", "Scarcroft Road", "York", "YO23 1NF");

console.log(fortyTwo2.display());
console.log(fortyTwo2.number);

