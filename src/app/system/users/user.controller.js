

function UserController($injector, UserService) {
	'ngInject';

	const ctrl = this;
  UserService.fetchUsers();
}

export default UserController;
