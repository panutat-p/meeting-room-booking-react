import { createBrowserRouter } from 'react-router-dom';

import LogInPage from '../pages/login-page';
import DashboardLayout from '../pages/dashboard-layout';
import HomePage from '../pages/dashboard/home-page';
import MeetingRooms from '../pages/dashboard/meeting-rooms';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LogInPage></LogInPage>,
  },
  {
    path: '/',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '',
        element: <HomePage></HomePage>,
      },
      {
        path: 'room',
        element: <MeetingRooms></MeetingRooms>,
      },
    ],
  },
]);

export default router;
