import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, className, loading = 'lazy', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className || ''}`}>
      {!isLoaded && <div className="lazy-image-placeholder" />}
      <img
        src={isInView ? src : undefined}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
