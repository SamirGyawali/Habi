import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listpage/ListPage";
import Layout from "./routes/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
