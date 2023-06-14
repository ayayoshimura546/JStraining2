// #8 create a js file with class to create objects explaining inheritance


class Chef {
    constructor(name, experty) {
      this.name = name;
      this.experty = experty;
    }
    info() {
      console.log(`${this.name}is in charge of ${this.experty}.`);
    }
  }
  
  class ChineseChef extends Chef {}
  const chinesechef = new ChineseChef('Sakura', 'Chinese dish');
  chinesechef.info();