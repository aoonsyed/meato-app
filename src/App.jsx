import CustomMainButton from "./components/Custom_Main_Button";
import router from "./routes/routes";
import { RouterProvider } from "react-router";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <RouterProvider router={router}>
     
      </RouterProvider>
    </>
  );
}

export default App;
