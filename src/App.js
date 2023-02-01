import Users from "./pages/Users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./pages/UserDetails";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Users />
    },
    {
      path: "/:id",
      element: <UserDetails />
    }
  ])
  return(
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;
