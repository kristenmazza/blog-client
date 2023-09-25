import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '/src/App';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        // {
        //     path: "/:postId",
        //     element: <PostDetail />,
        // },
        { path: '*', element: <ErrorPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
