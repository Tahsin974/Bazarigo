import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

export default function MainLayOut() {
  return (
    <div>
      <Navbar>
        <div>
          <Outlet />
        </div>
      </Navbar>
      <Footer />
    </div>
  );
}
