import { Home } from 'Containers/Home/Home'
import { Create } from 'Containers/Create/Create'

export const navItems = [
    {
        id: 1,
        name: '🏠',
        path: '/',
        Component: Home,
    },
    {
        id: 1,
        name: 'Create',
        path: '/create',
        Component: Create,
    },
    {
        id: 2,
        name: 'Preview',
        path: '/preview',
    },
    {
        id: 3,
        name: 'Export',
        path: '/export',
    },
]
