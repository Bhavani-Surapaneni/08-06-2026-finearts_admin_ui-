export default function Avatar({ src, alt, size = "md", fallback }) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-xl",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || "Avatar"}
        className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-white/10`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full gradient-bg flex items-center justify-center font-semibold text-white`}
    >
      {fallback || "?"}
    </div>
  );
}
