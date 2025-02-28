import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home"

import StreamModel from "./routes/StreamModel";
export default function App() {
  const BrowserRouter = createBrowserRouter([
    {path: "/", element: <Home/>},

    {path: "/stream/model", element: <StreamModel/>}
  ])
  return (
    <RouterProvider router={BrowserRouter}/>
  );
}


