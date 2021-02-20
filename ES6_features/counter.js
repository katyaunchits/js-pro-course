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
            currentValue = initialValue;
            console.log(currentValue)
            return currentValue
        }
    }
}