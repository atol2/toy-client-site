import { RouterProvider } from "react-router-dom";
import router from "./components/RootRouter";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
