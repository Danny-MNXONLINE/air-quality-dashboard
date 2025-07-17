import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login'
import { Users } from './pages/users/users'
import { Panel } from './pages/panel/panel'

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: Dashboard,
            },
            {
                path: 'users',
                component: Users
            },
            {
                path: 'panel',
                component: Panel
            }
        ]
    },
    {
        path: 'login',
        component: Login
    }
];
