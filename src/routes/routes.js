import InformationHome from "../pages/InformationHome";
import InformationHomeTwo from "../pages/InformationHomeTwo";
import { PrivateRoute } from "./privateRoute.jsx";
import { PublicRoute } from "./publicRoute.jsx";



export const getRoutes = [
    {
        isPrivate: true,
        path: '/page1',
        element: <InformationHome />
    },
    {
      isPrivate: true,
      path: '/page2',
      element: <InformationHomeTwo />
  },
    
    
]

export const getFormattedRoutes = ()=>
  getRoutes.map(route => ({
    ...route,
    element: route.isPrivate ? (
      <PrivateRoute>{route.element}</PrivateRoute>
    ) : (
        <PublicRoute>
            {route.element}
        </PublicRoute>
    ),
  }));