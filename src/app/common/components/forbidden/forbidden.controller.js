function ForbiddenController($state) {
	'ngInject';

	const ctrl = this;
  ctrl.back = () => {
    $state.go('app');
  };
}

export default ForbiddenController;
