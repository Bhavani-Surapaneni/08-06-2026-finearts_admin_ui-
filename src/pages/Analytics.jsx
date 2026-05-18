import { useSelector } from "react-redux";
import {
  HiTrendingUp,
  HiCurrencyDollar,
  HiUsers,
  HiUserGroup,
  HiArrowSmUp,
  HiArrowSmDown,
  HiStar,
  HiAcademicCap,
} from "react-icons/hi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Analytics() {
  const {
    revenueData,
    newStudentsData,
    topTrainers,
    mostBookedClasses,
    conversionRates,
    categoryPerformance,
  } = useSelector((state) => state.analytics);

  const summaryCards = [
    {
      title: "Total Revenue",
      value: `$${revenueData.total.toLocaleString()}`,
      change: "+18.7%",
      positive: true,
      icon: HiCurrencyDollar,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      title: "New Students",
      value: newStudentsData.total.toLocaleString(),
      change: "+23.1%",
      positive: true,
      icon: HiUsers,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Trial to Paid Conversion",
      value: `${conversionRates.trialToPaid}%`,
      change: "+5.2%",
      positive: true,
      icon: HiTrendingUp,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Repeat Booking Rate",
      value: `${conversionRates.repeatBookings}%`,
      change: "-2.1%",
      positive: false,
      icon: HiUserGroup,
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
    },
  ];

  const COLORS = ["#a842df", "#ee68e0", "#f4b16a", "#10b981", "#3b82f6"];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">Analytics</h1>
        <p className="text-gray-400 mt-1">
          Business insights and performance metrics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="glass-effect rounded-2xl p-6 card-glow border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color}`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  card.positive ? "text-green-400" : "text-red-400"
                }`}
              >
                {card.positive ? (
                  <HiArrowSmUp className="w-4 h-4" />
                ) : (
                  <HiArrowSmDown className="w-4 h-4" />
                )}
                {card.change}
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{card.value}</h3>
            <p className="text-sm text-gray-400">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="glass-effect rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData.monthly}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a842df" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a842df" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis
                stroke="#9ca3af"
                fontSize={12}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2f1d31",
                  border: "1px solid rgba(168, 66, 223, 0.3)",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#a842df"
                strokeWidth={2}
                fill="url(#colorRev)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* New Students Growth */}
        <div className="glass-effect rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold mb-6">Student Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={newStudentsData.monthly}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2f1d31",
                  border: "1px solid rgba(238, 104, 224, 0.3)",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#ee68e0"
                strokeWidth={2}
                dot={{ fill: "#ee68e0" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Trainers */}
        <div className="lg:col-span-2 glass-effect rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold mb-6">Top Performing Trainers</h3>
          <div className="space-y-4">
            {topTrainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    index === 0
                      ? "bg-yellow-500/20 text-yellow-400"
                      : index === 1
                        ? "bg-gray-400/20 text-gray-400"
                        : index === 2
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-white/10 text-white"
                  }`}
                >
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{trainer.name}</p>
                  <p className="text-sm text-gray-400">
                    {trainer.classes} Classes • {trainer.students} Students
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-400">
                    ${trainer.revenue.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-end gap-1 text-sm">
                    <HiStar className="w-4 h-4 star-rating" />
                    {trainer.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Performance */}
        <div className="glass-effect rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold mb-6">Category Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryPerformance}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="revenue"
              >
                {categoryPerformance.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2f1d31",
                  border: "1px solid rgba(168, 66, 223, 0.3)",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => `$${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryPerformance.map((cat, index) => (
              <div
                key={cat.category}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span>{cat.category}</span>
                </div>
                <span className="text-gray-400">
                  {cat.growth > 0 ? "+" : ""}
                  {cat.growth}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Booked Classes */}
      <div className="glass-effect rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold mb-6">Most Booked Classes</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mostBookedClasses} layout="vertical">
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />
            <XAxis type="number" stroke="#9ca3af" fontSize={12} />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#9ca3af"
              fontSize={12}
              width={120}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2f1d31",
                border: "1px solid rgba(244, 177, 106, 0.3)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Bar dataKey="bookings" fill="#f4b16a" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Conversion Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-effect rounded-2xl p-6 border border-white/10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4">
            <HiUsers className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-3xl font-bold mb-2">
            {conversionRates.trialToPaid}%
          </h3>
          <p className="text-gray-400">Trial to Paid Conversion</p>
          <div className="mt-4 w-full bg-white/10 rounded-full h-2">
            <div
              className="gradient-bg h-2 rounded-full"
              style={{ width: `${conversionRates.trialToPaid}%` }}
            ></div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 border border-white/10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-4">
            <HiTrendingUp className="w-8 h-8 text-pink-400" />
          </div>
          <h3 className="text-3xl font-bold mb-2">
            {conversionRates.websiteVisitors}%
          </h3>
          <p className="text-gray-400">Visitor to Signup Rate</p>
          <div className="mt-4 w-full bg-white/10 rounded-full h-2">
            <div
              className="gradient-bg h-2 rounded-full"
              style={{ width: `${conversionRates.websiteVisitors}%` }}
            ></div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 border border-white/10 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 mb-4"
            style={{ background: "rgba(244, 177, 106, 0.2)" }}
          >
            <HiUserGroup className="w-8 h-8" style={{ color: "#f4b16a" }} />
          </div>
          <h3 className="text-3xl font-bold mb-2">
            {conversionRates.repeatBookings}%
          </h3>
          <p className="text-gray-400">Repeat Booking Rate</p>
          <div className="mt-4 w-full bg-white/10 rounded-full h-2">
            <div
              className="gradient-bg h-2 rounded-full"
              style={{ width: `${conversionRates.repeatBookings}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
