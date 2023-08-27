import {User} from "../../common";

export default function AuthService(
  $http, AccessService, $state
) {
  'ngInject';

  const service = this;
  service.login = (userLogin) => {
    $http({
      method: 'GET',
      url: `http://localhost:3000/users?username=${userLogin.username}&password=${userLogin.password}`
    }).then(resp => {
      if (resp.data[0]) {
        AccessService.currentUser = new User(resp.data[0]);
        localStorage.setItem('currentUser', JSON.stringify(AccessService.currentUser));
        $state.go('users');
      } else {
        $state.go('auth.forbidden');
      }
    });
  }

  service.registration = (user) => {
    $http({
      method: 'POST',
      url: `http://localhost:3000/users`,
      data: user,
    }).then(resp => {
      service.users = [...service.users, resp];
    });
    $http({
      method: 'GET',
      url: `http://localhost:3000/users?username=${userLogin.username}&password=${userLogin.password}`
    }).then(resp => {
      if (resp.data[0]) {
        AccessService.currentUser = new User(resp.data[0]);
        localStorage.setItem('currentUser', JSON.stringify(AccessService.currentUser));
        $state.go('users');
      } else {
        $state.go('auth.forbidden');
      }
    });
  }
}
