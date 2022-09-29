var _ = require("underscore");

_.each([1, 2, 3], function (item) {
  //doesn't returan a new array
  console.log(item);
});

console.log(
  _.map([1, 2, 3], function (num) {
    //return a new array
    return num * 3;
  })
);

var evens = _.filter([1, 2, 3, 4, 5, 6], function (num) {
  return num % 2 == 0; //math
});
console.log(evens);

console.log(_.contains([1, 2, 3], 3)); //boolean

var founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
console.log(founders.size); // 2
console.log(founders.get("twitter")); // undefined
console.log(founders.has("google")); // false
for (var [key, value] of founders) {
  console.log(key + " founded by " + value);
}

var mySet = new Set();
mySet.add(1);
mySet.add("Howdy");
mySet.add("foo");
console.log(mySet.has(1)); // true
mySet.delete("foo");
console.log(mySet.size); // 2
for (let item of mySet) console.log(item);

var author = {
  firstname: "Douglas",
  lastname: "Crockford",
  book: {
    title: "JavaScript- The Good Parts",
    pages: "172",
  },
};

var author = {
  firstname: "Douglas",
  lastname: "Crockford",
  book: {
    title: "JavaScript- The Good Parts",
    pages: "172",
    age: 10,
  },
};
console.log(author["firstname"]); //Douglas
console.log(author.lastname); //Crockford
console.log(author.book.title);
console.log(author.book.age || "No Age Found");

var meetingRoom = {};
meetingRoom.book = function (roomId) {
  console.log("Booked meeting room -" + roomId);
};
meetingRoom.book("VL");
