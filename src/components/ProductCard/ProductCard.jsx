import React from "react";
import { formatPrice, showPercent } from "../../helper/helper";

const ProductCard = ({
  product: { id, filename, product_name, brand_name, base_price, actual_price },
}) => {
  const hasDiscount = +base_price !== +actual_price;

  return (
    <article className="product" data-id={id}>
      <div className="product__media">
        <img src={filename} alt={product_name} />
        {hasDiscount ? (
          <span className="product__media--discount">
            {showPercent(actual_price, base_price)}
          </span>
        ) : null}
      </div>
      <div className="product__brand">{brand_name}</div>
      <h3 className="product__name">{product_name.toLowerCase()}</h3>
      <div className="product__price">
        <div
          className={`product__price--actual ${
            hasDiscount ? "product__price--discounted" : ""
          }`}
        >
          {formatPrice(actual_price)}
        </div>
        {hasDiscount ? (
          <div className="product__price--base">{formatPrice(base_price)}</div>
        ) : null}
      </div>
    </article>
  );
};

export default ProductCard;
