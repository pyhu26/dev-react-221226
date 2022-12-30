import { HomePage, TasksPage, ProfilePage, DynamicPage, PersistPage, FxTabsPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    }
    ,
    {
        path: '/dynamic',
        element: DynamicPage
    },
    {
        path: '/persist',
        element: PersistPage
    }
    ,
    {
        path: '/statefulTabs',
        element: FxTabsPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
