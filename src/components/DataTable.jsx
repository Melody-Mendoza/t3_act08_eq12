import "../styles/DataTable.css";
import { Pencil, Trash2 } from "lucide-react";

function DataTable() {
    return (
        <div className="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://placehold.co/80x80" alt="Producto" />
                        </td>
                        <td>Essence Mascara</td>
                        <td>Beauty</td>
                        <td>$9.99</td>
                        <td>99</td>
                        <td>
                            <button className="edit">
                                <Pencil size={17} strokeWidth={2.5} />
                            </button>
                            <button className="delete">
                                <Trash2 size={17} strokeWidth={2.5} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;