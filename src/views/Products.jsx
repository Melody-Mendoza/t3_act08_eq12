import "../styles/Products.css";

import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";

function Products() {

    return (

        <div className="products">

            <ProductHeader />

            <ProductFilters />

            <DataTable />

            <Pagination />

        </div>

    )

}

export default Products;