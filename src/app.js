import angular from 'angular'
import appComponent from './app.component'
import uiBootstrap from 'angular-ui-bootstrap'
import loginModule from './login/login'
import './common/common'
import uiRouter from '@uirouter/angularjs'
import restaurantlistModule from './restaurantlist/restaurantlist'



angular.module('app',[uiBootstrap, loginModule, uiRouter, restaurantlistModule])
.component('app', appComponent)
