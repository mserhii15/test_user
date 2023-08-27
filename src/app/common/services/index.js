import angular from 'angular';
import AccessService from "./access.service";

export default angular
	.module('common.services', [])
	.service('AccessService', AccessService)
;
