function authRouter($stateRegistryProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/auth/login');

  $stateRegistryProvider.register({
    name: 'auth',
    url: '/auth',
    component: 'authContainer',
  });

  $stateRegistryProvider.register({
    name: 'auth.forbidden',
    url: '/forbidden',
    component: 'forbidden',
    onExit: ($state) => {
      $state.go('auth.registration');
    },
    lazyLoad: transition => {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName: 'forbidden' */  '../../common/components/forbidden/index').then(mod =>
        $ocLazyLoad.load(mod.default)
      );
    },
  });

  $stateRegistryProvider.register({
    name: 'auth.login',
    url: '/login',
    component: 'login',
  });

  $stateRegistryProvider.register({
  	name: 'auth.registration',
    url: '/registration',
    component: 'registration',
  });
}

export default authRouter;
