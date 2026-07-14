import "../styles/ProductFilters.css";
import { Search } from "lucide-react";


function ProductFilters({ limite, setLimite, busqueda, setBusqueda, categoria, setCategoria, listaCategorias = [] }) {
    return (
        <div className="product-filters">
            <div className="search-box">
                <Search size={18} strokeWidth={2.5} />
                <input
                    type="text" 
                    placeholder="Buscar producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>
            <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                <option value="Todas las categorías">Todas las categorías</option>
                {listaCategorias.map((cat, index) => (
                    <option key={index} value={cat.slug || cat}>
                        {cat.name || cat}
                    </option>
                ))}
            </select>
            <div className="limit-box">
                <label>Mostrar</label>
                <select
                    value={limite} 
                    onChange={(e) => setLimite(Number(e.target.value))}
                >
                    <option value={10}>10</option>
                    <option value={14}>14</option>
                    <option value={18}>18</option>
                    <option value={22}>22</option>
                </select>
            </div>
        </div>
    );
}

export default ProductFilters;