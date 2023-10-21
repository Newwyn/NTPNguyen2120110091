import React, { useState } from "react";
import SelectBox from '../../formitems/SelectBox';
import SelectBrand from '../../formitems/SelectBrand';
import SelectCategory from "../../formitems/SelectCategory";
import { validateProduct } from "../../../helper/validate";
import productApi from './../../../api/productApi';
import { toast } from "react-toastify";

function ProductAdd() {
  const [product, setProduct] = useState({});
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg(validateProduct(product));
    if (errMsg === "") {
      try {
        document.getElementById("submit").innerHTML = "creating......";
        const response = await productApi.add(product);
        document.getElementById("submit").innerHTML = "Create product";
        toast.success("thanh cong");
        document.getElementById("createProduct").reset();
        setProduct({});
      } catch (error) {
        toast.error("biloi" + error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <form
          action=""
          id="createProduct"
          className="m-auto"
          onSubmit={handleSubmit}
          style={{ maxWidth: 600 }}
        >
          <h3 className="my-4">Create Product</h3>
          {errMsg && <div className="bg-danger">{errMsg}</div>}
          <hr className="my-4" />
          <div className="form-group mb-3 row">
            <label htmlFor="product-name3" className="col-md-5 col-form-label">
              Product Name
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="product-name3"
                name="product_name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div action="" className="form-group mb-3 row">
            <label htmlFor="slug4" className="col-md-5 col-form-label">
              Slug
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="slug4"
                name="slug"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="category5" className="col-md-5 col-form-label">
              Category
            </label>
            <div className="col-md-7">
              <SelectCategory defaultValue="-1" handleFunction={handleChange} />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="brand6" className="col-md-5 col-form-label">
              Brand
            </label>
            <div className="col-md-7">
              <SelectBrand defaultValue="-1" handleFunction={handleChange} />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="product-name3" className="col-md-5 col-form-label">
              Hình ảnh
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="summary7" className="col-md-5 col-form-label">
              Summary
            </label>
            <div className="col-md-7">
              <textarea
                className="form-control"
                id="summary7"
                name="summary"
                defaultValue={""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="detail8" className="col-md-5 col-form-label">
              Detail
            </label>
            <div className="col-md-7">
              <textarea
                className="form-control"
                id="detail8"
                name="detail"
                defaultValue={""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="price9" className="col-md-5 col-form-label">
              Price
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="price9"
                name="price"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="sale-price10" className="col-md-5 col-form-label">
              Sale Price
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="sale-price10"
                name="sale_price"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="type11" className="col-md-5 col-form-label">
              Type
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="type11"
                name="type"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label htmlFor="status12" className="col-md-5 col-form-label">
              Status
            </label>
            <div className="col-md-7">
              <SelectBox
                name="status"
                defaultValue="-1"
                data={[
                  { label: "Ẩn", value: 0 },
                  { label: "Hiện", value: 1 },
                ]}
                handleFunction={handleChange}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label
              htmlFor="create-product13"
              className="col-md-5 col-form-label"
            />
            <div className="col-md-7">
              <button className="btn btn-primary" type="submit " id="submit">
                Create Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
