import { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ product }) => {

  const [selectedImage, setSelectedImage] = useState(product.image);

  const images = [product.image];

  return (

    <div className="product-gallery">

      <div className="thumbnail-column">

        {images.map((image, index) => (

          <div
            key={index}
            className={`thumbnail ${
              selectedImage === image ? "active" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >

            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />

          </div>

        ))}

      </div>

      <div className="main-image">

        <img
          src={selectedImage}
          alt={product.name}
        />

      </div>

    </div>

  );

};

export default ProductGallery;