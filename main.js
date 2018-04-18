var Type = require('./data-types');
var linkedList = new Type.LinkedList();


linkedList.add(1)
linkedList.add('bom')
linkedList.add(true)
linkedList.add("squirrel")
linkedList.add({name: 'Matt'})
linkedList.add([1, 2, 3, 4, 5])


console.log(linkedList.to_array());

// linkedList.remove(3);

// console.log(linkedList.to_array());
