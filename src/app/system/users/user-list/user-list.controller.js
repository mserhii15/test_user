
function UserListController($state, UserService) {
	'ngInject';

	const ctrl = this;
  ctrl.userService  = UserService;

  ctrl.createNewUser = () => {
    $state.go('users.create');
  }

  ctrl.editUser = (userId) => {
    $state.go('users.update', { userId });
  }
}

export default UserListController;
