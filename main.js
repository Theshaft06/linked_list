var Type = require('./data-types');
var linkedList = new Type.LinkedList();

for (var i = 1; i <= 10; i++) {
    linkedList.add(i)
}

console.log(linkedList.to_array());

linkedList.remove(3);

console.log(linkedList.to_array());
