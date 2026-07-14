const URL = "https://dummyjson.com/products";

export const fetchProducts = async (limit = 10, skip = 0, searchQuery = "", categoria = "") => {
    let url = URL;

    if (searchQuery) 
    {
        url = `${URL}/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
    } 
    else if (categoria && categoria !== "Todas las categorías") 
    {
        url = `${URL}/category/${categoria}?limit=${limit}&skip=${skip}`;
    } 
    else 
    {
        url = `${URL}?limit=${limit}&skip=${skip}`;
    }

    const response = await fetch(url);
    
    if (!response.ok) 
    {
        throw new Error("Error al cargar la lista de productos");
    }

    return response.json();
};

export const fetchCategories = async () => {
    const response = await fetch(`${URL}/categories`);
    
    if (!response.ok) {
        throw new Error("Error al cargar las categorías");
    }
    
    return response.json(); 
};

export const createProduct = async (productData) => {
    const response = await fetch (`${URL}/add`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
    });

    if (!response.ok) 
    {
        throw new Error("Error al intentar guardar el producto");
    }

    return response.json();
};

export const updateProduct = async (id, productData) => {
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        throw new Error("Error al intentar actualizar el producto");
    }

    return response.json();
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) 
    {
        throw new Error("Error al intentar eliminar el producto");
    }

    return response.json();
};