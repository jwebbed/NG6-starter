import template from './card.html';
import controller from './card.controller';
import './card.scss';

let CardComponent = {
  bindings: {
    person: '<'
  },
  template,
  controller
};

export default CardComponent;
