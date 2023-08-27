import { StickyStatesPlugin } from "@uirouter/sticky-states";
import { DSRPlugin } from "@uirouter/dsr";

export default function appRouter($uiRouterProvider, $urlRouterProvider) {
  'ngInject';

  $uiRouterProvider.plugin(StickyStatesPlugin);
  $uiRouterProvider.plugin(DSRPlugin);

  $urlRouterProvider.otherwise('/not-found');

  const $stateRegistry = $uiRouterProvider.stateRegistry;

  $stateRegistry.register({
    name: 'app',
    component: 'app',
  });

  $stateRegistry.register({
    name: 'auth.**',
    url: '/auth',
    lazyLoad: transition => {
      const AccessService = transition.injector().get('AccessService');
      const $state = transition.injector().get('$state');
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
      if (AccessService.isAuthorized()) {
        $state.go('users');
      }
      return import(/* webpackChunkName: 'auth' */  './system/auth/index').then(mod =>
        $ocLazyLoad.load(mod.default)
      );
    },
  });

  $stateRegistry.register({
		name: 'notFound',
		url: '/not-found',
		component: 'notFound',
    onEnter: (AccessService) => {
      AccessService.checkPagePermissions('');
    },
		lazyLoad: transition => {
			const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
			return import(/* webpackChunkName: 'not-found' */ './common/components/not-found/index').then(mod =>
				$ocLazyLoad.load(mod.default),
			);
		},
	});
}
