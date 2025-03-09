function Stat({ icon, title, value, color }) {
  return (
    <div className="flex-1 bg-white shadow-lg flex items-center gap-4 p-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div
        className={`p-4 rounded-full flex items-center justify-center text-white text-2xl`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm font-semibold">{title}</p>
        <p className="text-gray-900 text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
