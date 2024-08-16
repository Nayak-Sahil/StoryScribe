import { Outlet } from "react-router-dom";
import Navbar from "@/Landing/Navbar";

export default function AuthLayout() {
  return (
    <div className="w-full h-screen">
        <Navbar />
        
        {/* Relevant form appear as per router. */}
        <form className="mt-10">
            <Outlet />
        </form>
    </div>
  );
}
