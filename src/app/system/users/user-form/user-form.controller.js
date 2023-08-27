import {User} from "../../../common";

function UserFormController($stateParams, UserService) {
	'ngInject';

	const ctrl = this;
  ctrl.user = new User();
  ctrl.repeatPassword = null;
  if ($stateParams.userId) {
    UserService.getUserById($stateParams.userId).then(user => {
      ctrl.user = user;
    });
  }

  ctrl.onSaveUser = () => {
    if (ctrl.user === ctrl.repeatPassword) {
      if ($stateParams.userId) {
        UserService.updateUser(ctrl.user)
      } else {
        UserService.createUser(ctrl.user);
      }
    }
  }

  ctrl.deleteUser = () => {
    UserService.deleteUser(ctrl.user.id)
  }
}

export default UserFormController;
