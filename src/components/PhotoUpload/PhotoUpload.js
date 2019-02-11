import "./PhotoUpload.scss";
import React from "react";
import { connect } from "react-redux";

const PhotoUpload = props => {
  console.log("props", props);
  return (
    <div className="row">
      <div className="col s12 m12 l12">
        <div className="card black">
          <div className="card-content amber-text left-align">
            <div className="file-field input-field">
              <div className="btn amber">
                <span>Choose</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input
                  style={{ color: "white" }}
                  className="file-path validate"
                  type="text"
                />
              </div>
            </div>
            <a className="btn amber">
              <i className="material-icons left">backup</i>upload
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(PhotoUpload);
