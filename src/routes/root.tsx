import { createBrowserRouter } from 'react-router-dom';

import LoginPage from '../pages/login-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage></LoginPage>,
  },
]);

export default router;
