import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <p className="btn btn-primary">button</p>
        </div>
    )
}
