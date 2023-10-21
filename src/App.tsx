import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div className="p-5 text-red-800 bg-red-50">'404 Not Found'</div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
