import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../styles/ProductModal.css";

function ProductModal({ isOpen, onClose, onSave, listaCategorias, productoAEditar, onEdit }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");

    const [imagen, setImagen] = useState(null);

    useEffect(() => {
        if (productoAEditar) {
            setTitle(productoAEditar.title);
            setPrice(productoAEditar.price);
            setCategory(productoAEditar.category);
            setStock(productoAEditar.stock);
            setImagen(productoAEditar.thumbnail || null);
        }
        else {
            setTitle(""); setPrice(""); setCategory(""); setStock("");
            setImagen(null);
        }
    }, [productoAEditar, isOpen]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !price || !category || !stock) {
            Swal.fire("Error", "Por favor completa todos los campos", "warning");
            return;
        }

        const datosProducto =
        {
            title: title,
            price: parseFloat(price),
            category: category,
            stock: parseInt(stock),
            thumbnail: imagen ? imagen : (productoAEditar ? productoAEditar.thumbnail : "https://placehold.co/80x80")
        };

        if (productoAEditar) 
        {
            Swal.fire({
                title: '¿Estás seguro?',
                text: `¿Deseas modificar el producto: ${productoAEditar.title}?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6', 
                cancelButtonColor: '#9e1d1d', 
                confirmButtonText: 'Sí, modificar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) 
                {
                    const exito = await onEdit(productoAEditar.id, datosProducto);
                    
                    if (exito) 
                    {
                        Swal.fire("¡Éxito!", "Producto actualizado correctamente", "success");
                        onClose();
                    } 
                    else 
                    {
                        Swal.fire("Error", "No se pudo actualizar el producto", "error");
                    }
                }
            });
        } 
        else 
        {
            const exito = await onSave(datosProducto);
            
            if (exito) 
            {
                Swal.fire("¡Éxito!", "Producto agregado correctamente", "success");
                onClose();
            } 
            else 
            {
                Swal.fire("Error", "No se pudo procesar la solicitud", "error");
            }
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{productoAEditar ? "Editar Producto" : "Nuevo Producto"}</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre del producto</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ej: Laptop Lenovo" />
                    </div>

                    <div className="form-group">
                        <label>Categoría</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>

                            <option
                                value="">Selecciona una categoría...
                            </option>

                            {listaCategorias.map((cat, idx) => (
                                <option key={idx} value={cat.slug || cat}>
                                    {cat.name || cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Precio ($)</label>
                            <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0.00" className="input-especial" />
                        </div>
                        <div className="form-group">
                            <label>Stock</label>
                            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="0" className="input-especial" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Imagen del producto (Opcional)</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {imagen && <img src={imagen} alt="Vista previa" style={{ marginTop: '10px', width: '50px', borderRadius: '8px' }} />}
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="btn-save">{productoAEditar ? "Actualizar Cambios" : "Guardar Producto"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductModal;