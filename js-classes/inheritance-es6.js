class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    getFullName() {
        return `${this.name} ${this.model}`
    }
    getAge() {
        new Date().getFullYear() - this.year
    }
    getColor(value) {
        this.color === value ? console.log(`The car has already painted with ${value} color`) : this.color = value;
    }
    calculateWay(kilometers, fuel) {
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
}


class BMW extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, country, price, picture) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)
        this.country = country;
        this.price = price;
        this.picture = picture;
    }
    renderInfo() {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="body">
        <div class="content">
            <div class="title">${this.name}</div> 
            <div class="subtitle">Model: ${this.model}</div>
            <div class="image"><img src="${this.picture}"></img></div>       
            <div class="price">${this.price}$</div>
        </div>
    </div>`
        let container = document.querySelector('.container');
        container.append(card);
    }
}



class Mazda extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, price) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)
        this.price = price;
    }
    countMonthlyPayment(extraMargin, term) {
        return `Monthly payment during ${term} months: ${(this.price * (extraMargin / 100) + this.price) / term}$`;
    }
    countRentalPrice(days, price) {
        if (days < 5) {
            return `${days * price}$`
        } else if (days < 10) {
            return `${days * price - 30}$`
        } else {
            return `${days * price - 50}$`
        }
    }
}