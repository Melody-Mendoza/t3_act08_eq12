import "../styles/DataTable.css";
import { Pencil, Trash2 } from "lucide-react";
import Swal from 'sweetalert2';

function DataTable({productos = [], eliminarProductoLocal, abrirModalEdicion }) {

    const handleEliminar = (producto) => {
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Vas a eliminar el producto: ${producto.title}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33', 
            cancelButtonColor: '#50808E', 
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) 
            {
                const exito = await eliminarProductoLocal(producto.id);
                if (exito) 
                {
                    Swal.fire('¡Eliminado!', 'El producto desapareció del sistema.', 'success');
                }
                else 
                {
                    Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
                }
            }
        });
    };

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
                        {productos?.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <img src={producto.thumbnail} alt={producto.title} width="50" style={{borderRadius: "8px"}} />
                            </td>
                            <td>{producto.title}</td>
                            <td>{producto.category}</td>
                            <td>${producto.price}</td>
                            <td>{producto.stock}</td>
                            <td>
                                <button className="edit" onClick={() => abrirModalEdicion(producto)}>
                                    <Pencil size={17} strokeWidth={2.5} />
                                </button>
                                <button className="delete" onClick={() => handleEliminar(producto)}>
                                    <Trash2 size={17} strokeWidth={2.5} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;