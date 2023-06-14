// #4 Create an array with duplicate numbers and filter out the duplicates
var a = [2,4,6,5,4,7,9,8,7,6,13];

var b = a.filter(function (x, i, self) {
    return self.indexOf(x) === i && i !== self.lastIndexOf(x);
});

console.log(b);
