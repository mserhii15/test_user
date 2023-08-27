import angular from 'angular';
import userRouter from './user.router';
import UserService from './user.service';
import userList from './user-list';
import userForm from './user-form';
import userComponent from './user.component';
export default angular
	.module('user', [
		userList.name,
		userForm.name,
	])
	.config(userRouter)
	.component('userContainer', userComponent)
	.service('UserService', UserService);
