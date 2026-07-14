import { useState } from "react";
import "../styles/Navbar.css";

import {CircleUserRound,LogOut,Menu,ChevronDown} from "lucide-react";

function Navbar({ menuAbierto, setMenuAbierto }) {
    const [menuUsuario, setMenuUsuario] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-left">
                {!menuAbierto && (
                    <button
                        className="menu-navbar"
                        onClick={() => setMenuAbierto(true)}
                    >
                        <Menu size={24} />
                    </button>
                )}
                <h2>ControlSys</h2>
            </div>

            <div className="user-menu">
                <button
                    className="user-button"
                    onClick={() => setMenuUsuario(!menuUsuario)}
                >
                    <CircleUserRound size={40} strokeWidth={1.5} />

                    <div className="user-info">
                        <h4>Nombre del usuario</h4>
                        <span>correo@ejemplo.com</span>
                    </div>

                    <ChevronDown size={18} className="chevron-icon" />
                </button>

                {menuUsuario && (
                    <div className="dropdown-menu">
                        <button>
                            <LogOut size={18} />
                            <span>Cerrar sesión</span>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;