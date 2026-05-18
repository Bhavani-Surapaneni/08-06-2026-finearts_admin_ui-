const variants = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  inactive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  approved: "bg-green-500/20 text-green-400 border-green-500/30",
  rejected: "bg-red-500/20 text-red-400 border-red-500/30",
  suspended: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  confirmed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
  refunded: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  verified: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  unverified: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  blocked: "bg-red-500/20 text-red-400 border-red-500/30",
  paid: "bg-green-500/20 text-green-400 border-green-500/30",
  trial: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export default function Badge({ variant = "default", children }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant] || "bg-white/10 text-white border-white/20"}`}
    >
      {children}
    </span>
  );
}
