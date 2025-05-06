import router from "./routes/routes";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router}/>

    </>
  );
}

export default App;
