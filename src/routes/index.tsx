import { lazy } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

const DebounceThrottlePage = lazy(() => import("../page/DebounceThrottlePage"));

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/debounce-throttle", element: <DebounceThrottlePage /> },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
