import { createBrowserRouter, redirect } from 'react-router-dom';

import LogInPage from '../pages/login-page';
import DashboardLayout from '../pages/dashboard-layout';
import HomePage from '../pages/dashboard/home-page';
import MeetingRooms from '../pages/dashboard/meeting-rooms';
import { getProfile } from '../services/profile.service';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LogInPage></LogInPage>,
  },
  {
    path: '/',
    element: <DashboardLayout></DashboardLayout>,
    loader: async () => {
      try {
        const res = await getProfile();
        if (!res?.data.data.user) {
          throw new Error('data not found');
        }
        console.log('🟩 Succeeded to getProfile', res.data.data);
        return res.data.data.user;
      } catch (e) {
        throw redirect('/login');
      }
    },
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
