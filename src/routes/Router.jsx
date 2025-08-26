import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import ErrorPage from "../pages/ErrorPage";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Check the environment mode provided by Vite
const isProduction = import.meta.env.PROD;

// Determine the basename based on the environment
const basename = isProduction ? `/${import.meta.env.VITE_REPO_NAME}` : "/";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  // Use the dynamically set basename here
  { basename: basename }
);