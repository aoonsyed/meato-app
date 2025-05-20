import router from "./routes/routes";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Toaster/>
    <RouterProvider router={router}/>

    </>
  );
}

export default App;
