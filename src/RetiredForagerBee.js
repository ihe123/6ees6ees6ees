class RetiredForagerBee extends ForagerBee {
  constructor (food, treasureChest){
    super(food, treasureChest);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage (){
    return 'I am too old, let me play cards instead';
  }
  gamble (x){
    this.treasureChest.push(x);
  }
  // TODO..
};
