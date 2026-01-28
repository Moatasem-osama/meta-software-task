"use client";

import { useState , useEffect } from "react";
import assets from "../public/assets/assets.json";

type Asset = typeof assets[number];

interface TableProps {
  data: Asset[];
}
export default function Table({ data }: TableProps) {
  const [searchTerm, setSearchTerm] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");
const [sortBy, setSortBy] = useState("none");


  const [filter, setFilter] = useState("ALL");
  const filteredAssets =
    filter === "ALL" ? data : data.filter((a) => a.type === filter);
  const searchedAssets = filteredAssets.filter((asset) =>
    asset.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
  useEffect(() => {
    const timer = setTimeout(()=>{
      setDebouncedSearch(searchTerm);
    } , 500)
      return () => clearTimeout(timer);

  }, [searchTerm])
  
const sortedAssets = [...searchedAssets];
if (sortBy === "price-asc") {
  sortedAssets.sort((a, b) => a.currentPrice - b.currentPrice);
} else if (sortBy === "price-desc") {
  sortedAssets.sort((a, b) => b.currentPrice - a.currentPrice);
} else if (sortBy === "name-asc") {
  sortedAssets.sort((a, b) => a.name.localeCompare(b.name));
} else if (sortBy === "name-desc") {
  sortedAssets.sort((a, b) => b.name.localeCompare(a.name));
}
  return (
    <div className="p-6 text-center">
      <div className="my-5">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
        />
      </div>
      <div className="flex mx-auto justify-around gap-6 flex-wrap ">

      <div className="my-5">
        <label className="mr-2 font-semibold">Filter by Type:</label>

        <select
          name="dropdown"
          id="filtration"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="ALL" className="text-black">ALL</option>
          <option value="Stock" className="text-black">Stock</option>
          <option value="Crypto" className="text-black">Crypto</option>
          <option value="Mutual Fund" className="text-black">Mutual Fund</option>
        </select>
      </div>
        <div className="my-5">
          <label className="mx-4 font-semibold">Sort by:</label>
        <select
          name="sort"
          id="sorting"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="price-asc" className="text-black">price-asc</option>
          <option value="price-desc" className="text-black">price-desc</option>
          <option value="name-asc" className="text-black">name-asc</option>
          <option value="name-desc" className="text-black">name-desc</option>
        </select>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-transparent my-5 bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Investment assets</h1>

      <div className="relative overflow-x-auto shadow-sm rounded-md border border-gray-200">
        <table className="w-full text-sm text-left rtl:text-right text-gray-800">
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
            {sortedAssets.map((asset, index) => {
              const profit =
                (asset.currentPrice - asset.buyPrice) * asset.amount;
              return (
                <tr
                  key={index}
                  className="bg-transparent text-white"
                >
                  <th className="px-6 py-4  whitespace-nowrap">{asset.name}</th>
                  <td className="px-6 py-4">{asset.type}</td>
                  <td className="px-6 py-4">{asset.amount}</td>
                  <td className="px-6 py-4">${asset.buyPrice}</td>
                  <td className="px-6 py-4">${asset.currentPrice.toFixed(2)}</td>
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
