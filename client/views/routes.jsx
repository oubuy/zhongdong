import { Router, hashHistory } from 'react-router';
import React from 'react';


const routes = [
    {
        path: '/',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {//按需加载
                cb(null, require('views/main/main').default)
            }, 'main')//main表示在调试工具network中显示的名字
        },
        childRoutes: [

        ]
    },
    {
        path: '/service',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/service/service').default)
            }, 'service')
        }
    },
    {//配置路由
        path: '/function',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/function/function').default)
            }, 'function')
        }


    },
    {
        path:'/app',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/app/app').default)
            }, 'app')
        }
    },
    {
        path:'/solve',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/solve/solve').default)
            }, 'solve')
        }
    },
    {
        path:'/new',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/new/new').default)
            }, 'new')
        }
    }
];

class RouterConfig extends React.Component {
    render() {
        return <Router history={hashHistory} routes={routes} />
    }
}

export default RouterConfig;