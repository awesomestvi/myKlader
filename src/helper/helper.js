const CURRENCY = "kr";

export const formatPrice = (price) =>
  Number(price).toFixed(2).replace(/[.]/g, ",") + " " + CURRENCY;

export const showPercent = (actual_price, base_price) =>
  `-${((+actual_price / +base_price) * 100).toFixed(0)}%`;
