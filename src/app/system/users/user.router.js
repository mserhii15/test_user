function userRouter($stateRegistryProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/users');

  $stateRegistryProvider.register({
    name: 'users',
    url: '/users',
    component: 'userContainer',
    redirectTo: (transition) => {
      const accessService = transition.injector().get('AccessService')
      return accessService.checkPagePermissions('users').then(res => console.log('sssss', res));
    },
    lazyLoad: transition => {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName: 'users' */  './index').then(mod =>
        $ocLazyLoad.load(mod.default)
      );
    },
  });

  $stateRegistryProvider.register({
    name: 'users.forbidden',
    url: '/forbidden',
    component: 'forbidden',
    onExit: ($state) => {
      $state.go('users');
    },
    lazyLoad: transition => {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName: 'forbidden' */  '../../common/components/forbidden/index').then(mod =>
        $ocLazyLoad.load(mod.default)
      );
    },
  });

  $stateRegistryProvider.register({
    name: 'users.create',
    url: '/create',
    component: 'userForm',
    redirectTo: (transition) => {
      const accessService = transition.injector().get('AccessService')
      return accessService.checkPagePermissions('users.create').then((result) => {
        if (!result) {
          result = { state: 'users.forbidden' };
        }
        return result;
      });
    },
  });

  $stateRegistryProvider.register({
  	name: 'users.update',
    url: '/:userId',
    component: 'userForm',
    resolve: {
      userId: ($stateParams) => $stateParams.userId,
    },
    redirectTo: (transition) => {
      const accessService = transition.injector().get('AccessService')
      return accessService.checkPagePermissions('users.update').then((result) => {
        if (!result) {
          result = { state: 'users.forbidden' };
        }
        return result;
      });
    },
  });
}

export default userRouter;
