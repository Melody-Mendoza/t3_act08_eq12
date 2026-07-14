import "../styles/ProductHeader.css";
import { Plus } from "lucide-react";

function ProductHeader() {
    return (
        <div className="product-header">
            <div>
                <h1>Gestión de Productos</h1>
                <p>Consulta, agrega, edita y elimina productos del sistema.</p>
            </div>
            <button className="btn-add">
                <Plus size={18} strokeWidth={2.5} />
                <span>Nuevo producto</span>
            </button>
        </div>
    )
}

export default ProductHeader;