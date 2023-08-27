import angular from 'angular';
import directives from './directives';
import services from './services';


export * from './models';

export default angular.module('app.common', [
	directives.name,
	services.name,
]);

