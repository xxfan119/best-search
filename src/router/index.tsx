import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import useRouterItems from "./useRouterItems";

export default function Router() {
  const routers = useRouterItems();

  return (
    <Suspense fallback={"loading"}>
      <Routes>
        {routers.map((router) => {
          return <Route key={router.path} {...router} />;
        })}
      </Routes>
    </Suspense>
  );
}
