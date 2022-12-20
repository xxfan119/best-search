import { useMemo, lazy } from "react";
import { paths } from "$config/paths";
const Main = lazy(() => import("$pages/main"));
const Search = lazy(() => import("$pages/search"));

export default function useRouterItems() {
  const routers = useMemo(() => {
    return [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: `${paths.search}/:searchParams`,
        element: <Search />,
      },
    ];
  }, []);
  return routers;
}
