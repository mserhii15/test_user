import angular from 'angular';
import repeatPasswordValidationDirective from "./repeat-password";

const directives = [
  repeatPasswordValidationDirective.name
];

export default angular.module('common.directives', directives);
