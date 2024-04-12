// import TaskApp from "./TaskApp";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/signin/index.tsx";
import ProtectedRoute from "./ProtectedRoute";
import Notfound from "./pages/Notfound"
import Signup from './pages/signup/index.tsx';
import Dashboard from "./pages/dashboard";
const router = createBrowserRouter([
  {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path:"*",
      element: <Navigate to="/notfound" replace />
    },
    {
      path: "/notfound",
      element: <Notfound/>
    },

    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;