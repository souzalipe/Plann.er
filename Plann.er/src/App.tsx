import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import CreateTripPage from "./pages/Create-Trip";
import { TripeDatailsPage } from "./pages/Trip-datails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/tripes/:tripId",
    element: <TripeDatailsPage />
  }

])


function App() {
  return (<>
  <RouterProvider router={router} />
  </>
  );
}

export default App;
