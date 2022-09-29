function Player() {}
//Add a function to the prototype property of the function
Player.prototype.usesBat = function () {
  return true;
};

console.log(Player());

var crazyBob = Player();
if (crazyBob === undefined) {
  console.log("CrazyBob is not defined");
}

function Player() {
  this.isAvailable = function () {
    return "Instance method says - he is hired";
  };
}
Player.prototype.isAvailable = function () {
  return "Prototype method says - he is Not hired";
};
var crazyBob = new Player();
console.log(crazyBob.isAvailable());
