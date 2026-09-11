export default function Logo({ variant = 'full', size = 40, className = '' }) {
  if (variant === 'mark') {
    return (
      <img
        src="/elevatex-logo.jpg"
        alt="ElevateX"
        width={size}
        height={size}
        className={`logo-img logo-img-mark ${className}`}
        loading="eager"
        decoding="async"
      />
    );
  }

  if (variant === 'wordmark') {
    return (
      <img
        src="/elevatex-logo.jpg"
        alt="ElevateX. Design. Build. Elevate."
        className={`logo-img logo-img-wordmark ${className}`}
        style={{ height: size }}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <img
      src="/elevatex-logo.jpg"
      alt="ElevateX"
      className={`logo-img logo-img-full ${className}`}
      style={{ height: size }}
      loading="eager"
      decoding="async"
    />
  );
}
