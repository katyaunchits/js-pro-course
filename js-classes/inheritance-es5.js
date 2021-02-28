function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function() {
    return `${this.name} ${this.model}`
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

Car.prototype.getColor = function(value) {
    this.color === value ? console.log(`The car has already painted with ${value} color`) : this.color = value;

}

Car.prototype.calculateWay = function(kilometers, fuel) {
    if (fuel < 10) {
        console.log(`You're running out of fuel`);
    }
    let travelTime = kilometers / this.maxSpeed;
    let hours = Math.trunc(travelTime);
    let minutes = Math.trunc((travelTime - hours) * 60);
    let fuelForWay = kilometers * this.fuelConsumption / 100;
    let needForFuel = this.fuelCapacity - fuelForWay;
    if (needForFuel < 0) {
        return `Average travel time: ${hours} hours ${minutes} minutes. 
        You need extra ${-needForFuel} litres of fuel.`
    } else {
        return `Average travel time: ${hours} hours ${minutes} minutes.`
    }

}

Car.prototype.renderInfo = function() {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="body">
    <div class="content">
        <div class="title">${this.name}</div> 
        <div class="subtitle">Model: ${this.model}</div>
        <div class="image"><img src="${this.picture}"></img></div>   
        <ul class="descr"></ul>     
        <div class="price">${this.price}$</div>
    </div>
</div>`
    let container = document.querySelector('.container');
    container.append(card);
    createList(this.equipment);
}



function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, country, price, picture) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.country = country;
    this.price = price;
    this.picture = picture;
}

BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;


let bmw = new BMW('BMW', 'X6', 2020, 'black', 370, 50, 3, 'Germany', 108500, "img/bmw-white.png");

function Mazda(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, price) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.price = price;

}

Mazda.prototype = Object.create(Car.prototype);
Mazda.prototype.constructor = Mazda;

Mazda.prototype.countMonthlyPayment = function(extraMargin, term) {
    return `Monthly payment during ${term} months: ${(this.price * (extraMargin / 100) + this.price) / term}$`;
}
Mazda.prototype.countRentalPrice = function(days, price) {
    if (days < 5) {
        return `${days * price}$`
    } else if (days < 10) {
        return `${days * price - 30}$`
    } else {
        return `${days * price - 50}$`
    }
}

let mazda = new Mazda('Mazda', '6', 2020, 'red', 350, 80, 6, 45000);


function Tesla(name, model, year, color, maxSpeed, bataryCapacity, price, picture, equipment) {
    Car.call(this, name, model, year, color, maxSpeed);
    this.bataryCapacity = bataryCapacity;
    this.price = price;
    this.picture = picture;
    this.equipment = equipment;
}

Tesla.prototype = Object.create(Car.prototype);
Tesla.prototype.constructor = Tesla;



Tesla.prototype.getIngo = function() {
    return `${this.name} ${this.model}, ${this.year}, ${this.price}$`;
}

function createList(arr) {
    arr.forEach(el => {
        let item = `<li>${el}</li>`;
        let list = document.getElementsByTagName('ul')[0];
        list.innerHTML += item
    });
}

let tesla = new Tesla('Tesla', '3', 2018, 'silver metallic', 233, 66, 55300, "img/tesla-metallic.png", ['Heated steering wheel', 'Baby chair', 'Premium sound system']);





















// let ferrari = new Car('Ferrari', 'E60', 2011, 'red', 450);

// console.log(ferrari.calculateWay(3000, 5));

// console.log(ferrari);
// console.log(ferrari.getAge());

// console.log(ferrari.color);

// console.log(ferrari.getColor('yellow'));
// console.log(ferrari.color);