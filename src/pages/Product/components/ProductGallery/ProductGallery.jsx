import { useState, useEffect } from "react";
import LazyImage from "../../../../components/common/LazyImage";
import "./ProductGallery.css";

const ProductGallery = ({ product }) => {

  const [selectedImage, setSelectedImage] = useState(product.image);

  const images = [product.image];

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(product.image);
  }, [product.id]);

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
            role="button"
            tabIndex={0}
            aria-label={`View image ${index + 1}`}
          >

            <LazyImage
              src={image}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
            />

          </div>

        ))}

      </div>

      <div className="main-image">

        <LazyImage
          src={selectedImage}
          alt={product.name}
          loading="eager"
        />

      </div>

    </div>

  );

};

export default ProductGallery;