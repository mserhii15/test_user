import {User, UserLogin} from "../../../common";

function RegistrationController($injector) {
	'ngInject';

	const ctrl = this;
  ctrl.user = new User();
  ctrl.repeatPassword = null;

  ctrl.onStartRegistration = () => {
     angular.copy(ctrl.user);
     console.log('ctrl.user', ctrl.user);
  };

  ctrl.delete = function() {
    ctrl.user = new User();
  };
}

export default RegistrationController;
