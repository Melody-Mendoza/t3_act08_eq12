import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Home from "../views/Home";
import Products from "../views/Products";
import Settings from "../views/Settings";

import "../styles/Dashboard.css";

function Dashboard({user, setUser}) {
    const [menuAbierto, setMenuAbierto] = useState(true);
    const [vistaActiva, setVistaActiva] = useState("home");

    return (
        <div className="dashboard">
            <Sidebar
                menuAbierto={menuAbierto}
                setMenuAbierto={setMenuAbierto}
                vistaActiva={vistaActiva}
                setVistaActiva={setVistaActiva}
            />
            <div className="dashboard-content">
                <Navbar
                    menuAbierto={menuAbierto}
                    setMenuAbierto={setMenuAbierto}
                    user = {user}
                    setUser={setUser}
                />
                <main className="main-content">
                    {vistaActiva === "home" && <Home />}
                    {vistaActiva === "products" && <Products />}
                    {vistaActiva === "settings" && <Settings />}
                </main>
            </div>
        </div>
    );
}
export default Dashboard;