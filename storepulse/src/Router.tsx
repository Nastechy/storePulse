import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Tasks from "./pages/Tasks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                index: true
            },
            {
                path: "/projects",
                element: <Project />,
                index: true
            },
            {
                path: "/tasks",
                element: <Tasks />,
                index: true
            },

        ],
    },

]);

export default router;