import "../styles/ProductFilters.css";
import { Search } from "lucide-react";

function ProductFilters() {
    return (
        <div className="product-filters">
            <div className="search-box">
                <Search size={18} strokeWidth={2.5} />
                <input
                    type="text" placeholder="Buscar producto..."
                />
            </div>
            <select>
                <option>Todas las categorías</option>
                <option>Beauty</option>
                <option>Fragrances</option>
                <option>Furniture</option>
                <option>Groceries</option>
            </select>
            <div className="limit-box">
                <label>Mostrar</label>
                <select>
                    <option>10</option>
                    <option>20</option>
                    <option>40</option>
                    <option>50</option>
                </select>
            </div>
        </div>
    );
}

export default ProductFilters;