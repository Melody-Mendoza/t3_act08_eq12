import "../styles/Pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ pagina, setPagina, limite, total }) {
    const totalPaginas = Math.ceil(total / limite);
    const registroInicio = (pagina - 1) * limite + 1;

    const registroFin = Math.min(pagina * limite, total);

    const paginaAnterior = () => {
        if (pagina > 1) setPagina(pagina - 1);
    };

    const paginaSiguiente = () => {
        if (pagina < totalPaginas) setPagina(pagina + 1);
    };
    return (
        <div className="pagination">
            <span>
                {total > 0 
                    ? `Mostrando ${registroInicio} - ${registroFin} de ${total} productos` 
                    : "Mostrando 0 productos"}
            </span>
            <div className="pagination-buttons">
                <button onClick={paginaAnterior} disabled={pagina === 1}>
                    <ChevronLeft size={18} strokeWidth={2.5} />
                </button>

                <button className="active">
                    {pagina}
                </button>

                <button onClick={paginaSiguiente} disabled={pagina === totalPaginas}>
                    <ChevronRight size={18} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    )
}

export default Pagination;