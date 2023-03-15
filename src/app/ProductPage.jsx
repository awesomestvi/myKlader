import React from "react";
import Pagination from "../components/Pagination/Pagination";
import ProductCard from "../components/ProductCard/ProductCard";
import api_products from "../helper/product_list.json";
import useSortableData from "../hooks/useSortableData";

const ProductPage = () => {
  const { items, requestSort, sortConfig } = useSortableData([...api_products]);
  const [pageData, setPageData] = React.useState();
  const [showingText, setShowingText] = React.useState();

  return (
    <section>
      <div className="catalogue__header">
        <div className="catalogue__showing">{showingText}</div>
        <div className="catalogue__sort">
          <label htmlFor="sorting">Sort by </label>
          <select name="sorting" id="sorting" onChange={requestSort}>
            <option value="">Recommended</option>
            <option value={["actual_price", "ascending"]}>Lowest Price</option>
            <option value={["actual_price", "descending"]}>
              Highest Price
            </option>
          </select>
        </div>
      </div>

      <section className="catalogue-wrapper">
        <div className="catalogue">
          {pageData &&
            pageData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      <Pagination
        data={items}
        sortConfig={sortConfig}
        currentData={pageData}
        setCurrentData={setPageData}
        setShowingText={setShowingText}
        perPage={72}
      />
    </section>
  );
};

export default ProductPage;
