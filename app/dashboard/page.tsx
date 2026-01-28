"use client"
import assets from "../../public/assets/assets.json";
import Table from "../Table";
import { useEffect, useState } from "react";
import AddForm from "../AddForm";
import Charts from "../Charts";

export default function Dashboard() {

   const [data , setData] = useState(assets);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev =>
        prev.map(asset => {
          const variation = (Math.random() - 0.5) * 10; 
          return {
            ...asset,
            currentPrice: Math.max(0, asset.currentPrice + variation),
          };
        })
      );
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);
  const totalValue = data.reduce(
    (sum, asset) => sum + asset.amount * asset.currentPrice,
    0,
  );
  console.log("Total Value of Assets:", totalValue);

  const totalProfit = data.reduce(
    (sum, asset) => sum + (asset.currentPrice - asset.buyPrice) * asset.amount,
    0,
  );

  const total = data.length;

 
  return (
    <div className="text-white p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <h1 className="text-center bg-clip-text text-transparent text-5xl sm:text-6xl bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold">Dashboard</h1>
      <div className="flex gap-5 md:flex-row flex-col my-5">
        <div className="p-4 border rounded shadow-sm flex-1">
            <h2 className="text-lg font-semibold">Total Assets</h2>
            <p className="text-2xl">{total.toFixed(0)}</p>
        </div>
        <div className="p-4 border rounded shadow-sm flex-1">
            <h2 className="text-lg font-semibold">Total Value</h2>
            <p className="text-2xl">{totalValue.toFixed(0)}</p>
        </div>
        <div className="p-4 border rounded shadow-sm flex-1" >
            <h2 className="text-lg font-semibold">Total Profit</h2>
            <p className="text-2xl">{totalProfit.toFixed(0)}</p>
        </div>
      </div>
      <Charts data={data} />
      <AddForm setData={setData} />
      <Table data={data}/>
    
    </div>
  );
}
