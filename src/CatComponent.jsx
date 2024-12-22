import React, { useState } from "react";
import "./CatComponent.css";

const CatComponents = () => {
  const images = [
    "/cat1React.webp",
    "/cat2React.webp",
    "/cat3React.webp",
    "/cat4React.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="catApp">
      <header>
        <h1>Image Gallery</h1>
      </header>
      <h3>Click on an image!</h3>
      <div className="imageContainer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`Images ${selectedImage === image ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="selectedImage">
            <h2>Selected Image</h2>
            <img src= {selectedImage} alt="selected"/>
        </div>
      )}
    </div>
  );
};

export default CatComponents;
