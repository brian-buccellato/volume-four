import "./PhotoUpload.scss";
import React from "react";
import { connect } from "react-redux";
import { uploadPhoto } from "../../store/actions/uploadActions";

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handlePathSelect = this.handlePathSelect.bind(this);
    this.state = {
      image: "",
      path: "test-images"
    };
  }

  handleFileSelect = e => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.upload(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card black">
            <div className="card-content amber-text left-align">
              <div className="file-field input-field">
                <div className="btn amber">
                  <span>Choose</span>
                  <input onChange={this.handleFileSelect} type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input
                    style={{ color: "white" }}
                    className="file-path validate"
                    type="text"
                  />
                </div>
              </div>
              <a className="btn amber" onClick={this.handleSubmit}>
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
