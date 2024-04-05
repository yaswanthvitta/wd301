// import TaskApp from "./TaskApp";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from "./Layout"
import Signin from "./pages/Signin";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/Notfound"
const router = createBrowserRouter([
  {
      path: "/",
      element: <Navigate to="/signin" replace />,
    },
    {
      path:"/*",
      element: <Navigate to="/notfound" replace />
    },
    {
      path: "/notfound",
      element: <NotFound/>
    },

    {
      path: "/signin",
      element: <Signin />,
    },
    {
    element: <ProtectedRoute>
    <Layout />
  </ProtectedRoute>,
    children: [
      {
        path: "/home",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "tasks/:id",
        element: (<TaskDetailsPage />)
      },
      
      
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;