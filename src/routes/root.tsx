import { createBrowserRouter } from 'react-router-dom';

import LoginPage from '../pages/login-page';
import DashboardLayout from '../pages/dashboard-layout';
import Home from '../pages/dashboard/home';
import Room from '../pages/dashboard/room';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: 'room',
        element: <Room></Room>,
      },
    ],
  },
]);

export default router;
