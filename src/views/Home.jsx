import "../styles/Home.css";
import { Package, LayoutGrid, Activity, Info } from "lucide-react";

function Home() {
    return (
        <div className="home">

            <div className="page-header">
                <h1>Panel Principal</h1>
                <p>
                    Administra la información del sistema desde este panel de control.
                </p>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Productos</span>
                        <div className="card-icon">
                            <Package size={20} />
                        </div>
                    </div>
                    <h2>194</h2>
                    <small>Total registrados</small>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Categorías</span>
                        <div className="card-icon">
                            <LayoutGrid size={20} />
                        </div>
                    </div>
                    <h2>24</h2>
                    <small>Disponibles</small>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="card-title">API</span>
                        <div className="card-icon">
                            <Activity size={20} />
                        </div>
                    </div>
                    <h2>DummyJSON</h2>
                    <small>Conectada</small>
                </div>
            </div>

            <div className="info-panel">
                <div className="info-header">
                    <Info size={24} />
                    <h3>Información del sistema</h3>
                </div>
                <p>
                    Este sistema permite administrar productos utilizando la API DummyJSON.
                </p>
            </div>

        </div>
    )
}

export default Home;