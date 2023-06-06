import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/about', element: <About /> },
    ],
  },
]);

// const router = createBrowserRouter([{
//   path: '/', element: <Home />
// }])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
