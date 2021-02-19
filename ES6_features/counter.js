function createCounter(initialValue = 0) {
    let currentValue = initialValue;
    return {
        showValue: function() {
            console.log(currentValue);
            return currentValue
        },
        increment: function(value = 1) {
            currentValue += value
            console.log(currentValue)
            return currentValue
        },
        decrement: function(value = 1) {
            currentValue -= value
            console.log(currentValue)
            return currentValue
        },
        discard: function() {
            currentValue = 0
            console.log(currentValue)
            return currentValue
        }
    }
}

const counter = createCounter(2);
counter.showValue();
counter.increment();
counter.increment(2);
counter.decrement();
counter.decrement(5);
counter.discard();
counter.increment();
counter.decrement(3);