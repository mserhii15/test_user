import angular from 'angular';
import authRouter from './auth.router';
import authComponent from './auth.component';
import registration from "./registration";
import login from "./login";
import AuthService from "./auth.service";
import './auth.scss'

export default angular
	.module('auth', [
    registration.name,
		login.name,
	])
	.config(authRouter)
	.component('authContainer', authComponent)
	.service('AuthService', AuthService);
