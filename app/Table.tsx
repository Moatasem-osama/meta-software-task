"use client";
import assets from "../public/assets/assets.json";

export default function Table() {
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Investment assets</h1>

      <div className="p-10 relative overflow-x-auto shadow-sm rounded-md border border-gray-200">
        <table className="p-10 w-full text-sm text-left rtl:text-right text-gray-800">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-6 py-3 ">Name</th>
              <th className="px-6 py-3 ">Type</th>
              <th className="px-6 py-3 ">Amount</th>
              <th className="px-6 py-3 ">Buy Price</th>
              <th className="px-6 py-3 ">Current Price</th>
              <th className="px-6 py-3 ">Profit / Loss</th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset, index) => {
              const profit =
                (asset.currentPrice - asset.buyPrice) * asset.amount;
              return (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <th className="px-6 py-4  whitespace-nowrap">{asset.name}</th>
                  <td className="px-6 py-4">{asset.type}</td>
                  <td className="px-6 py-4">{asset.amount}</td>
                  <td className="px-6 py-4">${asset.buyPrice}</td>
                  <td className="px-6 py-4">${asset.currentPrice}</td>
                  <td
                    className={`px-6 py-4 ${
                      profit >= 0 ? "text-green-600" : "text-red-600"
                    } `}
                  >
                    ${profit.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}