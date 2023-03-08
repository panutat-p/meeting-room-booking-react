import { createBrowserRouter } from 'react-router-dom';

import LoginPage from '../pages/login-page';
import DashboardLayout from '../pages/dashboard-layout';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/',
    element: <DashboardLayout></DashboardLayout>,
  },
]);

export default router;
