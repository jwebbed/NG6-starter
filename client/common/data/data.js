import angular from 'angular';

import DataService from './data.service';

let dataModule = angular.module('data', [

])

.service('dataService', DataService)

.name;

export default dataModule;
