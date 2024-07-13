import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/projects", element: <Projects /> },
  ]);

  return (
    <div className="h-screen scroll-smooth">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
