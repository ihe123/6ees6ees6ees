class ForagerBee extends Bee {
  constructor(color){
    super(color)
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage (x){
    this.treasureChest.push(x);
  }
  // TODO..
};
