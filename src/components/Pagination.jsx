import "../styles/Pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
    return (
        <div className="pagination">
            <span>
                Mostrando 1 - 10 de 194 productos
            </span>
            <div className="pagination-buttons">
                <button>
                    <ChevronLeft size={18} strokeWidth={2.5} />
                </button>
                <button className="active">
                    1
                </button>
                <button>
                    2
                </button>
                <button>
                    3
                </button>
                <button>
                    <ChevronRight size={18} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    )
}

export default Pagination;