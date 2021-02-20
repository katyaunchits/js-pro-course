function filter() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!array.includes(arguments[i])) {
            array.push(arguments[i])
        }
    }
    return array
}