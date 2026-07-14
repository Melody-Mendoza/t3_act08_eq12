import "../styles/Products.css";

import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";

import { useProducts } from "../hooks/useProducts";

import { useState } from "react";
import ProductModal from "../components/ProductModal";

function Products() {

    const { 
        productos, 
        cargando,
        error, 
        pagina, 
        setPagina, 
        limite, 
        setLimite, 
        total,
        busqueda, 
        setBusqueda, 
        categoria, 
        setCategoria,
        listaCategorias,
        eliminarProductoLocal,
        agregarProductoLocal,
        editarProductoLocal
    } = useProducts();

    const [modalAbierto, setModalAbierto] = useState(false);

    const [productoAEditar, setProductoAEditar] = useState(null);

    const abrirModalEdicion = (producto) => {
        setProductoAEditar(producto); 
        setModalAbierto(true);      
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setProductoAEditar(null); 
    };

    return (

        <div className="products">

            <ProductHeader onAbrirModal={() => { setProductoAEditar(null); setModalAbierto(true); }} />

            <ProductFilters 
                limite={limite} setLimite={setLimite} 
                busqueda={busqueda} setBusqueda={setBusqueda}
                categoria={categoria} setCategoria={setCategoria}
                listaCategorias={listaCategorias}
            />

            <ProductModal 
                isOpen={modalAbierto} 
                onClose={cerrarModal} 
                onSave={agregarProductoLocal} 
                onEdit={editarProductoLocal} 
                listaCategorias={listaCategorias} 
                productoAEditar={productoAEditar}
            />

            {cargando ? (
                <div className="mensaje-cargando">
                    <p>Cargando productos, por favor espera...</p>
                </div>
            ) : error ? (
                <div className="mensaje-error">
                    <p>Ocurrió un error: {error}</p>
                </div>
            ) : (
                <>
                    <DataTable 
                        productos={productos} 
                        eliminarProductoLocal={eliminarProductoLocal}
                        abrirModalEdicion={abrirModalEdicion}
                    />
                    <Pagination 
                        pagina={pagina} 
                        setPagina={setPagina} 
                        limite={limite} 
                        total={total}
                    />
                </>
            )}
        </div>
    );
}

export default Products;