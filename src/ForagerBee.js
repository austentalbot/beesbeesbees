var ForagerBee = function() {
  Bee.apply(this, arguments);
  this.age=10;
  this.job='find pollen';
  this.color='yellow';
  this.canFly=true;
  this.treasureChest=[];

};

ForagerBee.prototype=Object.create(Bee.prototype);
ForagerBee.prototype.constructor=ForagerBee;

ForagerBee.prototype.forrage=function(treasure) {
  this.treasureChest.push(treasure);
}
