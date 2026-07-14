import "../styles/Sidebar.css";
import { Menu, House, Package, Settings } from "lucide-react";

function Sidebar({ menuAbierto, setMenuAbierto, vistaActiva, setVistaActiva }) {
    return (
        <aside className={menuAbierto ? "sidebar" : "sidebar sidebar-cerrado"}>

            <div className="sidebar-header">
                <button
                    className="menu-button"
                    onClick={() => setMenuAbierto(false)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {menuAbierto && (
                <div className="sidebar-brand">
                    <h2>ControlSys</h2>
                    <p>Sistema administrativo</p>
                </div>
            )}

            {menuAbierto && (
                <nav className="sidebar-menu">
                    <button
                        className={vistaActiva === "home" ? "activo" : ""}
                        onClick={() => setVistaActiva("home")}
                    >
                        <House size={20} />
                        <span>Inicio</span>
                    </button>

                    <button
                        className={vistaActiva === "products" ? "activo" : ""}
                        onClick={() => setVistaActiva("products")}
                    >
                        <Package size={20} />
                        <span>Productos</span>
                    </button>

                    <button
                        className={vistaActiva === "settings" ? "activo" : ""}
                        onClick={() => setVistaActiva("settings")}
                    >
                        <Settings size={20} />
                        <span>Configuración</span>
                    </button>
                </nav>
            )}
        </aside>
    );
}

export default Sidebar;