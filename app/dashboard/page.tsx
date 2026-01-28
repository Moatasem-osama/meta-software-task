import assets from "../../public/assets/assets.json";

export default function Dashboard() {
  const totalValue = assets.reduce(
    (sum, asset) => sum + asset.amount * asset.currentPrice,
    0,
  );
  console.log("Total Value of Assets:", totalValue);

  const totalProfit = assets.reduce(
    (sum, asset) => sum + (asset.currentPrice - asset.buyPrice) * asset.amount,
    0,
  );

  const total = assets.length;

  return (
    <div className="p-8">
      <h1>Dashboard</h1>
      <div className="flex gap-5 ">
        <div className="p-4 border rounded shadow-sm flex-1">
            <h2 className="text-lg font-semibold">Total Assets</h2>
            <p className="text-2xl">{total}</p>
        </div>
        <div className="p-4 border rounded shadow-sm flex-1">
            <h2 className="text-lg font-semibold">Total Value</h2>
            <p className="text-2xl">{totalValue}</p>
        </div>
        <div className="p-4 border rounded shadow-sm flex-1" >
            <h2 className="text-lg font-semibold">Total Profit</h2>
            <p className="text-2xl">{totalProfit}</p>
        </div>
      </div>
    </div>
  );
}
