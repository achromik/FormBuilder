import { Home } from 'Containers/Home/Home';
import { Create } from 'Containers/Create/Create';
import { Export } from 'Containers/Export/Export';
import { Preview } from 'Containers/Preview/Preview';

export const navItems = [
    {
        id: 0,
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
        Component: Preview,
    },
    {
        id: 3,
        name: 'Export',
        path: '/export',
        Component: Export,
    },
];

export const formData = {
    questionInput: {
        label: 'Question',
        placeholder: 'Please enter a question!',
    },
};
