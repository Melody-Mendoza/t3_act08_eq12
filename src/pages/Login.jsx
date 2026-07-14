import "../styles/Login.css";
import {usarLogin} from "../hooks/login.js"
import { UserRound } from "lucide-react";

function Login() {
    const {
        userName,
        SetUserName,
        contraseña,
        SetContraseña,
        error,
        handleSubmit
    } = usarLogin();
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-decoration"></div>
                <div className="login-content">
                    <div className="logo">
                        <UserRound size={34} color="white" strokeWidth={2.5} />
                    </div>
                    <h1>ControlSys</h1>
                    <p>Inicia sesión para continuar</p>
                    <form onSubmit={handleSubmit}>
                        {error && <p className="error">{error}</p> }
                        <div className="input-group">
                            <label>Usuario</label>
                            <input
                                type="text" 
                                placeholder="Ingresa tu usuario"
                                value={userName}
                                onChange={(e) => SetUserName (e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Contraseña</label>
                            <input
                                type="password" 
                                placeholder="Ingresa tu contraseña"
                                value={contraseña}
                                onChange={(e) => SetContraseña (e.target.value)}
                            />
                        </div>
                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;