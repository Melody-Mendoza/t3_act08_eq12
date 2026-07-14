# ControlSys

## Descripción del Proyecto
Este proyecto es una aplicación web (Frontend) desarrollada en React que permite la gestión completa de un inventario de productos. El sistema incluye un panel interactivo con paginación, filtros dinámicos por categorías, búsqueda en tiempo real y un CRUD (Crear, Leer, Actualizar, Eliminar) optimizado para ofrecer una experiencia de usuario fluida y reactiva.

---

## Requisitos de Evaluación (Rúbrica)

* **Integrantes del equipo:** 
  1. Angel de Jesus Mendez Garcia
  2. 
* **API utilizada para la tabla de datos:** [DummyJSON - Products API](https://dummyjson.com/docs/products)

---

## División del Trabajo

### Lógica, Estado y Consumo de API (Desarrollado por Angel Mendez)
Esta sección abarca toda la lógica de negocio, el manejo de estados globales y la conexión con el Backend simulado para darle vida a la interfaz.

* **Arquitectura de Hooks (`useProducts.js`):** Centralización de la lógica de peticiones asíncronas (`fetch`) para separar el "cerebro" de la aplicación de la vista de React.
* **Sincronización de Estado con la URL:** Implementación de lectura y escritura de parámetros de búsqueda (`?page=2&limit=20`) usando `URLSearchParams` y `window.history.pushState`. Esto permite que las vistas de la tabla puedan ser compartidas mediante enlaces directos y conservar el historial del navegador.
* **Paginación y Filtrado Dinámico:** Lógica matemática para el cálculo del `skip` y consumo del endpoint de categorías (`/products/categories`) para autocompletar los selectores de datos.
* **CRUD Local:** Dado que DummyJSON es una API de solo lectura, se implementó un sistema que simula peticiones `POST`, `PUT` y `DELETE` reales al servidor, pero intercepta la respuesta para modificar el estado de React localmente al instante. Se incluyó la generación de IDs únicos (`Date.now()`) y manejo de errores silenciosos para evitar caídas (404) al interactuar con productos agregados localmente.
* **Manejo de Archivos:** Uso de la API nativa `FileReader` de JavaScript dentro del `ProductModal` para permitir al usuario subir imágenes locales, transformarlas a Base64 y previsualizarlas en la tabla sin necesidad de un servidor de almacenamiento real.
* **Alertas y Validaciones:** Integración y configuración de la lógica de `SweetAlert2` para interceptar acciones críticas (como eliminar) con validaciones y promesas asíncronas.

### Diseño de Interfaz (UI/UX) y Maquetación (Desarrollado por Melody Mendoza)


---

## Tecnologías Utilizadas
* **React 18** - Librería principal para la construcción de la interfaz de usuario.
* **Vite** - Empaquetador y entorno de desarrollo rápido.
* **CSS3** - Estilos, variables y animaciones nativas.
* **SweetAlert2** - Librería para modales y alertas interactivas.
* **Lucide React** - Set de iconos vectoriales ligeros.

---
