import { useMemo } from "react";
import { paths } from "../config/paths";
import Main from "../pages/main";
import Search from "../pages/search";
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
