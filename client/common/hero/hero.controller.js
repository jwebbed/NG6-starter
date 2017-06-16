import data from './directory.json';
import { map, reduce } from 'lodash';

class HeroController {
  constructor($window, $scope) {
    this.name = 'hero';
    this.people = data.Collection.Items.Item;

    // for testing cut this the fuck down
    this.people = this.people.slice(0, 60);
    //console.log(this.people);
    /*
    this.people = map(this.people, (person) => {
      let np = { ...person };
      np.Facets = reduce(person.Facets.Facet, (total, facet) => {
        total[facet.Name] = facet.String.Value;
      }, {});
      return np;
    });
    */

    this.setGrid();
    angular.element($window).on('resize', () => {
      $scope.$apply(() => {
        this.setGrid();
      })
    });
  }

  setGrid() {
    const ratioHeight = 170;
    const ratioWidth = 160;

    let width = window.outerWidth;
    let height = window.outerHeight;

    // to compensate for padding;
    width -= 100;
    height -= 100;

    let f = (itemWidth) => {
      const itemHeight = (ratioHeight * itemWidth) / ratioWidth;
      const nW = Math.floor(width / itemWidth);
      const nH = Math.floor(height / itemHeight);
      return nW * nH;
    }

    let itemWidth = 170;
    while (true) {
      if (f(itemWidth) >= this.people.length) {
        break;
      }
      itemWidth--;
    }

    let itemHeight = (170 * itemWidth) / 160;
    let cols = Math.floor(width / itemWidth);
    let rows = Math.floor(height / itemHeight);
    this.gridStyles = {
      gridTemplateColumns: `repeat(${cols}, ${itemWidth}px)`,
      gridTempateRows: `repeat(${rows}, ${itemHeight}) `
    }

    this.cardHeight = {
      height: `${itemHeight}px`
    }


    console.log(itemWidth);
    console.log(itemHeight);
  }
}

export default HeroController;
