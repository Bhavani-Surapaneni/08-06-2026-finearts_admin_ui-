import { HiRefresh } from "react-icons/hi";

const variants = {
  primary: "gradient-bg text-white hover:shadow-lg hover:shadow-purple-500/25",
  secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  danger:
    "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30",
  success:
    "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30",
  ghost: "text-gray-400 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <HiRefresh className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      {children}
    </button>
  );
}
