import data from './directory.json';

class HeroController {
  constructor() {
    this.name = 'hero';
    this.people = data.Collection.Items.Item;

    // for testing cut this the fuck down
    this.people = this.people.slice(0, 100);
    //console.log(this.people);
    console.log(window.outerWidth);
  }
}

export default HeroController;
