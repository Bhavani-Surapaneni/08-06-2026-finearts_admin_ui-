export default function Card({
  children,
  className = "",
  hoverable = true,
  ...props
}) {
  return (
    <div
      className={`glass-effect rounded-2xl border border-white/10 p-6 ${hoverable ? "card-glow" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
