import React from "react";
import Card from "../Card/Card";
import PhotoUpload from "../PhotoUpload/PhotoUpload";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Card cardTitle={"Photo Upload"} cardContent={"Upoload something"} />
        <PhotoUpload />
      </div>
    );
  }
}

export default Admin;
