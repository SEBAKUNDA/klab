
const myArr = [{"name": "Bike" , "price":100}, {"name":"TV", "price":200}, {"name": "Album", price:10},
{"name": "Book", "price":5}, {"name": "Phone", "price":500}, {"name":"Computer", "price":1000}];



myArr.sort((a, b) => {
    return a.price - b.price;
});


myArr.forEach((e) => {
    console.log(`${e.name} ${e.price}`);
});


myArr.sort((a, b) => {
    return b.price - a.price;
});

myArr.forEach((e) => {
    console.log(`${e.name} ${e.price}`);
})



var prices = [];
for(let i=0; i<myArr.length; i++){
    prices.push(myArr[i].price);
}

var sum = prices.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum);



var underTen = [];
for(let i=0; i<= 10; i++){
    underTen.push(prices[i]);
}

var sumUnderTen = underTen.reduce(function(a, b) {
    return a +b;
}, 0);

var fullPrice = prices.reduce(function(a, b){
    return a + b;
},0);

console.log(fullPrice - sumUnderTen);
javascript.txt
Displaying javascript.txt