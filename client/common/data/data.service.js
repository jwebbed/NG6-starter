import data from './directory.json';

class DataService {
  constructor(){
    this.cbs = [];
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
  }

  getPeople(){
    return this.people;
  }

  addUpdateCallback(cb){
    this.cbs.push(cb);
  }

}


export default DataService;
