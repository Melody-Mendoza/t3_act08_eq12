import { useState, useEffect } from "react";
import { fetchProducts, fetchCategories, deleteProduct, createProduct, updateProduct} from "../services/productsApi";

export const useProducts = () => {
    const query = new URLSearchParams(window.location.search);
    const urlPage = parseInt(query.get("page")) || 1;
    const urlLimit = parseInt(query.get("limit")) || 10;

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const [pagina, setPagina] = useState(urlPage);
    const [limite, setLimite] = useState(urlLimit);
    const [total, setTotal] = useState(0);

    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("Todas las categorías");

    const [listaCategorias, setListaCategorias] = useState([]);

    useEffect(() => {
        setPagina(1);
    }, [busqueda, categoria]);

    useEffect(() => {
        const cargarCategorias = async () => {
            try 
            {
                const categoriasData = await fetchCategories();
                setListaCategorias(categoriasData);
            } 
            catch (error) 
            {
                console.error("No se pudieron cargar las categorías", error);
            }
        };
        cargarCategorias();
    }, []);

    const cargarProductos = async () => {
        try 
        {
            setCargando(true);
            setError(null);

            const skip = (pagina - 1) * limite;
            
            const nuevaUrl = `?page=${pagina}&limit=${limite}`;
            window.history.pushState({}, '', nuevaUrl);

            const data = await fetchProducts(limite, skip, busqueda, categoria);

            setProductos(data.products);
            setTotal(data.total);
        }
        catch (err)
        {
            setError(err.message);
        }
        finally
        {
            setCargando(false);
        }
    };

    useEffect (() => {
        cargarProductos ();
    }, [pagina, limite, busqueda, categoria]);

    const eliminarProductoLocal = async (id) => {
        try 
        {
            try 
            {
                await deleteProduct(id);
            } 
            catch (apiError) 
            {
                console.warn("Aviso: Producto local eliminado de la tabla.");
            }
            setProductos(productos.filter(prod => prod.id !== id));
            setTotal(total - 1);
            
            return true;
        } 
        catch (error) 
        {
            console.error("Hubo un error al eliminar:", error);
            return false; 
        }
    };

    const agregarProductoLocal = async (datosNuevoProducto) => {
        try 
        {
            const productoCreado = await createProduct(datosNuevoProducto);
            productoCreado.id = Date.now();
            setProductos([productoCreado, ...productos]);
            setTotal(total + 1);
            return true; 
        } 
        catch (error) 
        {
            console.error("Hubo un error al crear:", error);
            return false; 
        }
    };

    const editarProductoLocal = async (id, datosActualizados) => {
        try 
        {
            try 
            {
                await updateProduct(id, datosActualizados);
            } 
            catch (apiError) 
            {
                console.warn("Aviso: Producto local modificado.");
            }
        
            setProductos(productos.map(prod => 
                prod.id === id ? { ...prod, ...datosActualizados } : prod
            ));
            
            return true;
        } 
        catch (error) 
        {
            console.error("Hubo un error al editar:", error);
            return false;
        }
    };

    return{
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
    };
};