const AuthLayout = ({ children, imageSrc = "/images/curated_collection.jpg", imageAlt = "Asha Boutique" }) => {
  return (
    <section className="auth-page">
      {/* Left Side */}
      <div className="auth-left">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="auth-image"
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
