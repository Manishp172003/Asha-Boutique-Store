import LazyImage from '../common/LazyImage';

const AuthLayout = ({ children, imageSrc = "/images/curated_collection.jpg", imageAlt = "Asha Boutique" }) => {
  return (
    <section className="auth-page">
      {/* Left Side */}
      <div className="auth-left">
        <LazyImage
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
        />
      </div>

      {/* Right Side */}
      <div className="auth-right">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
