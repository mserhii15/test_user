export default function AccessService($state, $http) {
  const service = this;

  service.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  service.permission = {
    Admin: new Set([
      'users',
      'users.create',
      'users.update',
      'users.delete',
    ]),
    Driver: new Set(['users']),
  };

  service.isAuthorized = () => {
    return !!service.currentUser;
  }

  service.checkPagePermissions = (pageState) => {
    let isAvailable = service.isAvailablePermission(pageState);
    if (!service.isAuthorized()) {
      isAvailable = { state: 'auth.login' };
    }
    return Promise.resolve(isAvailable);

  }

  service.isAvailablePermission = (permission) => {
    const permissionSet = service.permission[service.currentUser && service.currentUser.type];
    return !!(permissionSet && permissionSet.has(permission));
  }
}
