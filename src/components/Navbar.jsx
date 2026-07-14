import { useState } from "react";
import "../styles/Navbar.css";

import {
    CircleUserRound,
    LogOut,
    Menu,
    ChevronDown
} from "lucide-react";

function Navbar({ menuAbierto, setMenuAbierto, user, setUser }) {
    const [menuUsuario, setMenuUsuario] = useState(false);

    const handleLogout = () => {
        setUser(null);
    };

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
                    {user?.image ? (

                        <img
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="user-avatar"
                        />
                    ) : (

                        <CircleUserRound
                            size={40}
                            strokeWidth={1.5}
                        />

                    )}

                    <div className="user-info">
                        <h4>{user ? `${user.firstName} ${user.lastName}` : "Cargando..."}</h4>
                        <span>{user ? user.email : "Cargando..."}</span>
                    </div>

                    <ChevronDown size={18} className="chevron-icon" />
                </button>

                {menuUsuario && (
                    <div className="dropdown-menu">
                        <button onClick={handleLogout}>
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