import React from "react";
import ImageUploader from "./component/index.js";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="page">
        <ImageUploader
          style={{ maxWidth: "500px", margin: "20px auto" }}
          withPreview={true}
        />
      </div>
      
    );
  }
}
