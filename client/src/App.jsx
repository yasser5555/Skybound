// import AppRoutes from "./routes/AppRoutes";
import { AppRoutes } from "./Routes/AppRoutes";
import { RouterProvider as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Router router={AppRoutes} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="colored"
      />
    </>
  );
}
