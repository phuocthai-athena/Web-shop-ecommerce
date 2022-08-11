import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "./ProductView";
import productData from "../assets/fake-data/products";
import Button from "./Button";
import { remove } from "../redux/product-modal/productModalSlice";

const ProductViewModal = (props) => {
  const productSlug = useSelector((state) => state.productModal.value);

  const dispatch = useDispatch();

  const [product, setproduct] = useState(undefined);

  // const product = productData.getProductBySlug("quan-jean-phong-cach-10");

  useEffect(() => {
    setproduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

// ProductViewModal.propTypes = {};

export default ProductViewModal;
