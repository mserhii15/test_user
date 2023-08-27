import template from './user-form.component.html';
import controller from './user-form.controller';

const userFormComponent = {
	template,
	controller,
	controllerAs: '$ctrl',
  bindings: {
    userId: '<'
  }
};

export default userFormComponent;
