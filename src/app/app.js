import angular from 'angular';

import ocLazyLoad from 'oclazyload';
import uiRouter from '@uirouter/angularjs';

import '../assets/style/styles.scss';

import components from './system';

import appRouter from './app.router';
import appComponent from './app.component.js';
import common from "./common";

export const appAngularJs = angular.module('app', [uiRouter,  ocLazyLoad, common.name, components.name]).component('app', appComponent).config(appRouter)

