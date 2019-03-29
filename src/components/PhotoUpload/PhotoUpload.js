import "./PhotoUpload.scss";
import React from "react";

import M from "materialize-css/dist/js/materialize";

import { connect } from "react-redux";
import { uploadPhoto } from "../../store/actions/uploadActions";

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      image: "",
      path: "",
      uploadError: null
    };
  }

  handleFileSelect = e => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0], path: this.props.storagePath });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.upload(this.state);
    M.toast({ html: "File uploaded successfully" });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card black">
            <div className="card-content amber-text left-align">
              <div className="file-field input-field">
                <div className="btn amber waves-effect">
                  <span>Choose</span>
                  <input onChange={this.handleFileSelect} type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input
                    style={{ color: "white" }}
                    className="file-path"
                    type="text"
                  />
                </div>
              </div>
              <a className="btn amber waves-effect" onClick={this.handleSubmit}>
                <i className="material-icons left">backup</i>upload
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    upload: file => dispatch(uploadPhoto(file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
