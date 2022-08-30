import { Suspense } from "react";
import {
  useRoutes,
} from "react-router-dom";

import { getFormattedRoutes} from "./routes";
export const RouterProvider = () => {

  const element = useRoutes(getFormattedRoutes())

  return (
      
        <Suspense>
          {element}
        </Suspense>
  );
};
