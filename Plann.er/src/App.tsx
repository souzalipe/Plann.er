import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/Create-Trip"
import { TripDetailsPage } from "./pages/Trip-datails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />
  },
])

export function App() {
  return <RouterProvider router={router} />
}