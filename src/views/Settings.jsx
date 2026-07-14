import "../styles/Settings.css";
import { FolderGit2, GitCommitHorizontal, CloudCog, Users, Info } from "lucide-react";

function Settings() {
    return (
        <div className="settings">

            <div className="page-header">
                <h1>Configuración</h1>
                <p>
                    Consulta la información general del sistema y del proyecto.
                </p>
            </div>

            <div className="settings-grid">

                <div className="settings-card">
                    <div className="settings-icon">
                        <FolderGit2 size={24} />
                    </div>
                    <div className="settings-info">
                        <h3>Proyecto</h3>
                        <span>ControlSys</span>
                    </div>
                </div>

                <div className="settings-card">
                    <div className="settings-icon">
                        <GitCommitHorizontal size={24} />
                    </div>
                    <div className="settings-info">
                        <h3>Versión</h3>
                        <span>1.0.0</span>
                    </div>
                </div>

                <div className="settings-card">
                    <div className="settings-icon">
                        <CloudCog size={24} />
                    </div>
                    <div className="settings-info">
                        <h3>API utilizada</h3>
                        <span>DummyJSON</span>
                    </div>
                </div>

                <div className="settings-card">
                    <div className="settings-icon">
                        <Users size={24} />
                    </div>
                    <div className="settings-info">
                        <h3>Equipo</h3>
                        <span>Equipo 12</span>
                    </div>
                </div>

            </div>

            <div className="about-card">
                <div className="about-header">
                    <Info size={26} />
                    <h2>Acerca del sistema</h2>
                </div>
                <p>
                    ControlSys es un sistema desarrollado en React para administrar
                    productos consumiendo la API DummyJSON.
                    Este proyecto implementa autenticación, navegación protegida,
                    filtros, paginación y operaciones CRUD.
                </p>
            </div>

        </div>
    )
}

export default Settings;