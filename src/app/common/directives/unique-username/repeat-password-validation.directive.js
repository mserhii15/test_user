function repeatPasswordValidationDirective() {
  'ngInject';
  return {
    require: 'ngModel',
    restrict: 'A',
    scope: {
      currentPassword: '<',
    },
    link: function(scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$validators.repeatPasswordValidation = function(modelValue, viewValue) {
        return !ngModelCtrl.$isEmpty(modelValue) && modelValue === scope.currentPassword;
      };
    }
  };
}

export default repeatPasswordValidationDirective;

