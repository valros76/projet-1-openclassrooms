type StatCardI = {
  label: string,
  value?: number,
  color:string
};

export const StatCard = ({ label, value, color }: StatCardI) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg my-4">
    <p className="text-center text-white-400 text-sm font-bold uppercase">{label}</p>
    <p className={`text-center text-3xl font-black mt-2 ${color}`}>{value ?? 0}</p>
  </div>
  )
}