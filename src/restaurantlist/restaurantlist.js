import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import restaurantlist from './restaurantlist.component'
import restaurantlistService from './restaurantlist.factory'

let restaurantlistModule = angular.module('restaurantlist',[uiRouter])
                                .config(($stateProvider, $urlRouterProvider)=>{
                                    "ngInject"
                                    $urlRouterProvider.otherwise('/login');
                                    $stateProvider.state('view', {
                                        url:'/view',
                                        component: 'restaurantlist',
                                    })
                                })
                                .component('restaurantlist',restaurantlist)
                                .factory('restaurantlistService', restaurantlistService)
                                .name

export default restaurantlistModule