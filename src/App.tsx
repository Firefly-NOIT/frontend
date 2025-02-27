import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home"
import StreamVideo from "./routes/StreamVideo"
import StreamModel from "./routes/StreamModel";
export default function App() {
  const BrowserRouter = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/stream/video", element: <StreamVideo/>},
    {path: "/stream/model", element: <StreamModel/>}
  ])
  return (
    <RouterProvider router={BrowserRouter}/>
  );
}


