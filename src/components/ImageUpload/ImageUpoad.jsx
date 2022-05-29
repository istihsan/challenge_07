import React from "react";
import fi_upload from "../../assets/images/icon/fi_upload.png";

const ImageUpoad = ({ ...rest }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <label htmlFor="inputFoto6" className="col-form-label">
            Foto
          </label>
          <label htmlFor="wajib" style={{ color: "red" }}>
            *
          </label>
        </div>
        <div className="col-lg-9">
          <div className="input-group">
            <input
              className="form-control"
              type="file"
              name="image"
              id="formFile"
              {...rest}
            />
            <span className="input-group-text">
              <img src={fi_upload} alt="car" />
            </span>
          </div>
          <small
            id="fileHelp"
            className="form-text text-muted"
            style={{ marginLeft: "1px" }}
          >
            File size max. 2 MB
          </small>
        </div>
      </div>
    </>
  );
};

export default ImageUpoad;
