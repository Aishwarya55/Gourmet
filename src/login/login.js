import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import loginComponent from './login.component'

let login = angular.module('login', [uiRouter])
                    .config(($stateProvider, $urlRouterProvider) =>{
                        "ngInject";
                        $urlRouterProvider.otherwise('/login');
                        $stateProvider.state('login',{
                            url:'/login',
                            component:'login'
                        })

                    })
            .component('login', loginComponent)
            .name

export default login