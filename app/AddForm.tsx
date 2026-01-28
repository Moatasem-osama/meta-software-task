"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Asset = {
  name: string;
  type: string;
  amount: number;
  buyPrice: number;
  currentPrice: number;
};

type AddFormProps = {
  setData: React.Dispatch<React.SetStateAction<Asset[]>>;
};

type FormValues = {
  name: string;
  type: string;
  amount: number;
  buyPrice: number;
  currentPrice: number;
};

export default function AddForm({ setData }: AddFormProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    const newAsset: Asset = {
      ...formData,
      amount: Number(formData.amount),
      buyPrice: Number(formData.buyPrice),
      currentPrice: Number(formData.currentPrice),
    };

    setData((prev) => [...prev, newAsset]);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-5 border p-4 rounded flex flex-wrap gap-2"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full md:w-auto border px-2 py-1"
      />
      <input
        {...register("type")}
        placeholder="Type"
        className="w-full md:w-auto border px-2 py-1"
      />
      <input
        {...register("amount")}
        type="number"
        placeholder="Amount"
        className="w-full md:w-auto border px-2 py-1"
      />
      <input
        {...register("buyPrice")}
        type="number"
        placeholder="Buy Price"
        className="w-full md:w-auto border px-2 py-1"
      />
      <input
        {...register("currentPrice")}
        type="number"
        placeholder="Current Price"
        className="w-full md:w-auto border px-2 py-1"
      />
      <button
        type="submit"
        className="w-full md:w-auto bg-blue-500 text-white px-4 py-1 rounded md:block"
      >
        Add
      </button>
    </form>
  );
}
