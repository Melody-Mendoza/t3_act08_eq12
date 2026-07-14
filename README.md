# ControlSys

## Descripción del Proyecto
Este proyecto es una aplicación web (Frontend) desarrollada en React que permite la gestión completa de un inventario de productos. El sistema incluye un panel interactivo con paginación, filtros dinámicos por categorías, búsqueda en tiempo real y un CRUD (Crear, Leer, Actualizar, Eliminar) optimizado para ofrecer una experiencia de usuario fluida y reactiva.

---

## Requisitos de Evaluación (Rúbrica)

* **Integrantes del equipo 12:** 
  1. Mendez Garcia Angel de Jesus 
  2. Mendoza Jimenez Melody Nathalie
* **API utilizada para la tabla de datos:** [DummyJSON - Products API](https://dummyjson.com/docs/products)
**Enlace al proyecto desplegado (VPS):** http://68.183.115.226/t3_act08_eq12
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

### Diseño de Interfaz (UI/UX) y Desarrollo Frontend (Realizado por Melody Nathalie Mendoza Jimenez)

Durante el desarrollo del proyecto me encargué de toda la parte visual de la aplicación, tomando como base el mockup realizado previamente en Figma y adaptándolo a React.

- **Diseño de la interfaz:** Creación del diseño del sistema manteniendo una apariencia moderna, limpia y profesional, utilizando una paleta de colores en tonos verde y beige para conservar una identidad visual uniforme.
- **Construcción de componentes:** Desarrollo de los componentes visuales principales del sistema, como el Login, Sidebar, Navbar, Home, Settings, ProductHeader, ProductFilters, DataTable, Pagination y los distintos modales, procurando que fueran reutilizables y fáciles de mantener.
- **Maquetación con React y CSS:** Implementación de toda la estructura visual utilizando componentes de React y hojas de estilo CSS independientes para mantener un proyecto organizado.
- **Diseño responsivo y experiencia de usuario:** Organización de los elementos de la interfaz buscando una distribución clara, espacios equilibrados y una navegación intuitiva para facilitar el uso del sistema.
- **Personalización de la interfaz:** Integración de la librería **Lucide React** para utilizar iconografía moderna y consistente, además de incorporar efectos visuales, transiciones suaves, sombras, estados *hover* y menús desplegables que mejoran la experiencia del usuario.
- **Preparación para la integración de la lógica:** Se dejó lista toda la estructura visual de la aplicación para facilitar la integración de la autenticación con DummyJSON, el consumo de la API de productos, los filtros, la paginación y las operaciones CRUD desarrolladas posteriormente.

---

## Tecnologías Utilizadas
* **React 18** - Librería principal para la construcción de la interfaz de usuario.
* **Vite** - Empaquetador y entorno de desarrollo rápido.
* **CSS3** - Estilos, variables y animaciones nativas.
* **SweetAlert2** - Librería para modales y alertas interactivas.
* **Lucide React** - Set de iconos vectoriales ligeros.

---
## Conclusión

El desarrollo de **ControlSys** permitió aplicar los conocimientos adquiridos durante el curso de Programación Web mediante la construcción de una aplicación desarrollada en React. A lo largo de la actividad se trabajó con componentes reutilizables, consumo de APIs, manejo de estados, diseño de interfaces y operaciones CRUD, integrando tanto la parte visual como la lógica de funcionamiento.

Como resultado, se obtuvo un sistema capaz de simular un entorno real de administración de productos, utilizando tecnologías actuales y siguiendo buenas prácticas de desarrollo, lo que fortaleció nuestras habilidades tanto en React como en el consumo de servicios web y la organización de proyectos Frontend.

---

