import React from "react";
import Card from "../Card/Card";
import PhotoUpload from "../PhotoUpload/PhotoUpload";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Card
          cardTitle={"Header Photo Upload"}
          cardContent={"Select a photo to use for thee site header"}
        />
        <PhotoUpload storagePath={"header-image"} />
        <Card
          cardTitle={"Gallery Photo Upload"}
          cardContent={"Select a photo to add to the site gallery"}
        />
        <PhotoUpload storagePath={"photo-gallery"} />
        <Card
          cardTitle={"Tile Photo Upload"}
          cardContent={"Select a photo to use for a tile"}
        />
        <PhotoUpload storagePath={"tile-images"} />
        <Card
          cardTitle={"Jukebox Upload"}
          cardContent={"Select a song to add to the site jukebox"}
        />
        <PhotoUpload storagePath={"jukebox"} />
        <Card
          cardTitle={"Side-Nav Upload"}
          cardContent={"Select an image to use for the  side nav"}
        />
        <PhotoUpload storagePath={"side-nav"} />
      </div>
    );
  }
}

export default Admin;
