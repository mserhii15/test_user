import {  UserLogin } from "../../../common";

function LoginController($injector, AuthService) {
  'ngInject';

  const ctrl = this;
  ctrl.user = new UserLogin();

  ctrl.onStartLogin = () => {
    AuthService.login(ctrl.user);
  };

  ctrl.reset = function () {
    ctrl.user = new UserLogin();
  };
}

export default LoginController;
