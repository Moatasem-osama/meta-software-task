"use client";

import { useForm } from "react-hook-form";

export default function AddForm({ setData }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    const newAsset = {
      ...formData,
      amount: Number(formData.amount),
      buyPrice: Number(formData.buyPrice),
      currentPrice: Number(formData.currentPrice),
    };

    setData(prev => [...prev, newAsset]);
    reset(); 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-5 border p-4 rounded flex flex-wrap gap-2"
    >
      <input {...register("name")} placeholder="Name" className="border px-2 py-1" />
      <input {...register("type")} placeholder="Type" className="border px-2 py-1" />
      <input {...register("amount")} type="number" placeholder="Amount" className="border px-2 py-1" />
      <input {...register("buyPrice")} type="number" placeholder="Buy Price" className="border px-2 py-1" />
      <input {...register("currentPrice")} type="number" placeholder="Current Price" className="border px-2 py-1" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
    </form>
  );
}
