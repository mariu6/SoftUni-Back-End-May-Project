function add(...params) {
    return params.reduce((a,b) => a+b, 0);
}


module.exports = add;
